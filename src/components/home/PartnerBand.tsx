import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { partners } from '@/config/partners';

/**
 * Development-partner band, directly under the hero (#7).
 *
 * Replaces the plain-text "Built for Arterial, Not Real Art, Artsville USA, and
 * The Intersect" line that used to close the hero. Sitting this high on the page
 * means it does qualification work early: a visitor sees organizations like
 * their own before they have read a single feature.
 *
 * The marquee is CSS-only (see `.partner-marquee` in src/styles/tailwind.css) so
 * it costs no JavaScript and needs no client boundary. The track holds two
 * identical sets and translates by exactly -50%, which is what makes the loop
 * seamless. Under `prefers-reduced-motion` the animation is cancelled and the
 * duplicate set is hidden, leaving a static centred row - a band that never
 * stops moving is not acceptable, and the site's global reduced-motion rule
 * (which merely collapses animation-duration to 0.01ms) would otherwise snap the
 * track to its end position rather than stopping it.
 */
export function PartnerBand() {
  return (
    <section
      aria-labelledby="partner-band-heading"
      className="border-y border-white/[0.06] bg-navy-950 py-12 sm:py-14"
    >
      <Container>
        <div className="text-center">
          <h2
            id="partner-band-heading"
            className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-400/90"
          >
            Development Partners
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm/6 text-gray-400">
            These organizations shaped PolyWiz and run live campaigns on it
            today, across exhibitions, newsletters, podcasts, and open calls.
          </p>
        </div>
      </Container>

      {/* Full-bleed track: the marquee reads better running edge to edge than
          boxed inside the container, so it deliberately sits outside it. */}
      <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="partner-marquee flex w-max items-center">
          {[0, 1].map((copy) => (
            partners.map((partner) => (
              <li
                key={`${partner.name}-${copy}`}
                // Spacing lives in each item's own padding, NOT in a flex `gap`.
                // A gap is only applied *between* items, so the two sets would
                // not tile at exactly 50% of the track and the loop would jump.
                className="partner-marquee-item shrink-0 px-8 sm:px-14 lg:px-20"
                // The second set is a visual duplicate that exists only to make
                // the loop seamless, so it is hidden from assistive tech.
                aria-hidden={copy === 1 || undefined}
              >
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={copy === 1 ? -1 : undefined}
                  className="block opacity-60 transition hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-primary-400"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={partner.width}
                    height={partner.height}
                    // Eager, not lazy. The track is wider than the viewport, so
                    // the logos queued off-screen right would otherwise not load
                    // until the marquee had already carried them into view - the
                    // first loop would show gaps where a logo should be. The
                    // whole set is well under 100KB.
                    loading="eager"
                    className={`w-auto ${partner.heightClass}`}
                  />
                </a>
              </li>
            ))
          ))}
        </ul>
      </div>
    </section>
  );
}
