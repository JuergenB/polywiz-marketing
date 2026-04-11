#!/bin/bash
# Generate dark-mode Napkin AI infographics for all 12 PolyWiz features
# Each call generates 3 style variations (options 1-3)

set -euo pipefail

NAPKIN_KEY="sk-0cc53648e20b930153bb86f56a7f39c49e6f67b7557a058f541d47f6df3e57ec"
OUT_DIR="/Users/juergenberkessel/Projects/polywiz-marketing/public/images/features"
API_URL="https://api.napkin.ai/v1/visual"

mkdir -p "$OUT_DIR"

# Feature content descriptions for Napkin
declare -A FEATURES

FEATURES[campaign-planner]="Campaign Planner Workflow for Arts Organizations:
1. Paste URL — User pastes an exhibition page, newsletter, or event URL
2. AI Content Extraction — Firecrawl scrapes text, images, and metadata from the page
3. Campaign Generation — AI creates platform-specific posts for 13 social platforms
4. Schedule & Distribute — Posts are scheduled over weeks with tapering cadence"

FEATURES[ai-post-generator]="AI Post Generation System with 4 pillars:
- Brand Voice Consistency: Configurable 8-dimension voice per brand (Wit, Warmth, Authority, etc.)
- Platform-Specific Content: Tailored formatting for 13 social platforms
- Image-Text Integrity: Prevents hallucinated artist names in generated content
- Campaign Type Rules: Dynamic editorial rules per campaign type (exhibition, newsletter, event)"

FEATURES[tone-voice-system]="8-Dimension Brand Voice Control System:
- Wit — humor level from dry to playful
- Warmth — emotional tone from distant to intimate
- Opinion — stance from neutral to opinionated
- Skepticism — critical thinking level
- Playfulness — formality spectrum
- Urgency — call-to-action intensity
- Authority — expertise projection
- Intimacy — audience closeness
Master Intensity Slider controls all dimensions from Professional to Full Voice"

FEATURES[smart-scheduler]="Smart Scheduling Algorithm with 4 Profiles:
1. Sprint (2 weeks) — intensive short-term promotion
2. Standard (6 weeks) — balanced distribution
3. Evergreen (3 months) — sustained long-term presence
4. Marathon (6 months) — maximum reach
Features: Tapering algorithm with front-loaded distribution, per-brand cadence limits, collision avoidance, calendar heatmap visualization"

FEATURES[approval-queue]="Approval Queue Workflow — Human-in-the-Loop:
1. Review Drafts — Team examines AI-generated post drafts
2. Edit or Swap — Modify text, swap images from campaign library
3. Approve Posts — Approve individually or in bulk
4. Publish — Only approved posts go live to platforms
Nothing goes live without human approval"

FEATURES[cover-slide-designer]="Cover Slide Designer for Carousel Posts:
- Band-Based Layout — images, text, branding, and separators in customizable bands
- Template Gallery — brand-scoped and type-aware template suggestions
- Visual Editing — eyedropper color picker, font size control, image repositioning
- AI Headlines — automatically generated headline text
- Multi-Platform Output — Instagram, Threads, Bluesky, LinkedIn PDF carousels"

FEATURES[quick-post]="Quick Post — Standalone Post Creation:
1. Choose Platform — select from 13 social platforms
2. Compose Content — write or AI-generate a single post
3. Add Media — attach images with preview
4. Publish or Schedule — send immediately or schedule for later
No campaign required — ideal for timely announcements"

FEATURES[multi-platform-publisher]="Multi-Platform Publishing Dashboard — 13 Platforms:
Instagram, TikTok, YouTube, LinkedIn, Pinterest, X/Twitter, Facebook, Threads, Bluesky, Snapchat, Google Business, Reddit, Telegram
Features: One-click publishing, automatic webhook status sync, branded short links, LinkedIn PDF carousel assembly, lnk.bio integration"

FEATURES[brand-manager]="Multi-Brand Management System:
- Brand Profiles — distinct voice, tone dimensions, cadence per brand
- Connected Accounts — separate social accounts and API keys per brand
- Team Access — role-based permissions with user-brand mapping
- Brand Assets — logos, color palettes, and visual identity per brand
Switch between organizations while maintaining each brand's unique identity"

FEATURES[image-optimizer]="Image Optimization Pipeline:
1. AI Outpainting — extend images that don't fit aspect ratios using Replicate Flux
2. Platform Auto-Crop — square, portrait, landscape, vertical crops per platform
3. Smart Compression — PNG to JPEG, size optimization without quality loss
4. Cloud Hosting — Vercel Blob permanent hosting with deduplication
Gallery-ready visuals optimized for every platform"

FEATURES[link-shortener]="Link Shortening & Tracking System:
- Per-Brand Domains — custom short domains for each organization
- Automatic UTM Tags — campaign, source, medium, and content parameters
- Click Tracking — engagement metrics across all published links
- Cleanup on Delete — automatic short link removal when campaigns are deleted
Powered by Short.io integration"

FEATURES[campaign-dashboard]="Campaign Dashboard — Real-Time Analytics:
- Time Range Filters — today, 7 days, 30 days, 90 days, year-to-date, all time
- Pending Queue — approval queue with deep-links to campaign detail
- Schedule Heatmap — visual calendar of scheduled posts across all brands
- Failed Alerts — failed post notifications with one-click retry or delete
At-a-glance overview of all campaign activity"

# Function to generate images for one feature
generate_feature() {
  local slug="$1"
  local content="${FEATURES[$slug]}"

  echo "=== Generating: $slug ==="

  # Create request
  RESPONSE=$(curl -s -X POST "$API_URL" \
    -H "Authorization: Bearer $NAPKIN_KEY" \
    -H "Content-Type: application/json" \
    -d "$(jq -n \
      --arg content "$content" \
      '{
        content: $content,
        format: "png",
        color_mode: "dark",
        number_of_visuals: 3,
        orientation: "horizontal"
      }')")

  REQUEST_ID=$(echo "$RESPONSE" | jq -r '.id // empty')

  if [ -z "$REQUEST_ID" ]; then
    echo "ERROR creating request for $slug: $RESPONSE"
    return 1
  fi

  echo "  Request ID: $REQUEST_ID"

  # Poll until completed (max 60 seconds)
  for i in $(seq 1 12); do
    sleep 5
    STATUS_RESPONSE=$(curl -s "$API_URL/$REQUEST_ID/status" \
      -H "Authorization: Bearer $NAPKIN_KEY")
    STATUS=$(echo "$STATUS_RESPONSE" | jq -r '.status')
    echo "  Poll $i: $STATUS"

    if [ "$STATUS" = "completed" ]; then
      # Download files
      local idx=1
      echo "$STATUS_RESPONSE" | jq -r '.generated_files[].url' | while read -r URL; do
        local outfile="$OUT_DIR/${slug}-option-${idx}.png"
        curl -s "$URL" \
          -H "Authorization: Bearer $NAPKIN_KEY" \
          -o "$outfile"
        echo "  Downloaded: ${slug}-option-${idx}.png"
        idx=$((idx + 1))
      done
      return 0
    fi

    if [ "$STATUS" = "failed" ]; then
      echo "  FAILED: $STATUS_RESPONSE"
      return 1
    fi
  done

  echo "  TIMEOUT for $slug"
  return 1
}

# Generate all features sequentially (to avoid rate limits)
for slug in campaign-planner ai-post-generator tone-voice-system smart-scheduler \
            approval-queue cover-slide-designer quick-post multi-platform-publisher \
            brand-manager image-optimizer link-shortener campaign-dashboard; do
  generate_feature "$slug" || echo "WARNING: Failed to generate $slug"
  echo ""
done

echo "=== DONE ==="
echo "Dark-mode images saved to $OUT_DIR/"
echo "Light-mode originals preserved in $OUT_DIR/light/"
