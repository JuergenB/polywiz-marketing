/**
 * Development partners (#7).
 *
 * These organizations shaped PolyWiz and run real campaigns on it. The wording
 * is deliberately "development partners", never "built for" - "built for X"
 * reads as "we are X's in-house tool", which is both less accurate and weaker
 * social proof than "these organizations helped build it and use it".
 *
 * Logo assets come from the app repo's Airtable `Brands` table, which stores
 * per-brand logo variants as Vercel Blob URLs. The band sits on navy, so every
 * mark here is the WHITE-on-transparent variant, trimmed to its content box and
 * normalised to 160px tall so the row reads as one treatment rather than a
 * ransom note. Regenerate with:
 *
 *   magick <source>.png -trim +repage -resize x160 -strip PNG32:<out>.png
 *
 * | Partner      | Airtable field                                    |
 * |--------------|---------------------------------------------------|
 * | Arterial     | (none usable - the square variant has an opaque   |
 * |              |  black box; taken from polywiz-app                 |
 * |              |  public/brands/arterial-logo.png instead)          |
 * | Not Real Art | Logo Transparent Light                             |
 * | Artsville    | Logo Rectangular Dark                              |
 * | The Intersect| Logo Rectangular Dark                              |
 * | Lamar Dodd   | Logo Rectangular Dark                              |
 *
 * `heightClass` is per-logo on purpose. Normalising every mark to the same
 * pixel height makes stacked marks (Not Real Art) look heavier than single-line
 * wordmarks (Arterial) at the same measurement, so each one is optically sized.
 * These are one-line tweaks - change the Tailwind height and reload.
 */
export interface Partner {
  /** Display name, also the accessible link label. */
  name: string;
  /** Partner's own site. */
  href: string;
  /** White-on-transparent mark in /public/logos/partners. */
  logo: string;
  /** Intrinsic size of the asset, for next/image. */
  width: number;
  height: number;
  /** Describes what the mark actually shows, not just the brand name. */
  alt: string;
  /** Optically balanced display height. Tune per logo, not globally. */
  heightClass: string;
}

export const partners: Partner[] = [
  {
    name: 'Arterial',
    href: 'https://arterial.org',
    logo: '/logos/partners/arterial-wordmark-white.png',
    width: 745,
    height: 160,
    alt: 'Arterial, set as a white serif wordmark',
    heightClass: 'h-7 sm:h-8',
  },
  {
    name: 'Not Real Art',
    href: 'https://notrealart.com',
    logo: '/logos/partners/not-real-art-stacked-white.png',
    width: 184,
    height: 160,
    alt: 'Not Real Art, stacked in three lines of heavy white capitals',
    heightClass: 'h-10 sm:h-12',
  },
  {
    name: 'Artsville USA',
    href: 'https://artsvilleusa.com',
    logo: '/logos/partners/artsville-usa-wordmark-white.png',
    width: 315,
    height: 160,
    alt: 'Artsville, stacked as two lines of condensed white capitals',
    heightClass: 'h-9 sm:h-11',
  },
  {
    name: 'The Intersect',
    href: 'https://theintersect.art',
    logo: '/logos/partners/the-intersect-lockup-white.png',
    width: 361,
    height: 160,
    alt: 'The Intersect lockup, the wordmark banded between "Art in Tech" and "Tech in Art"',
    heightClass: 'h-11 sm:h-14',
  },
  // ⏳ TIME-BOXED, added 2026-08-12 for a demo the following day.
  //
  // The only partner here that is NOT an Arterial property, which is exactly
  // why it does the most proof work: a university art school is dead-centre in
  // this site's stated audience.
  //
  // The owner has the School Director's permission, but wants it OFF the public
  // site until UGA's board meetings have happened, and is taking it back up
  // BEFORE 2026-08-27. It is on now because the near-term audience is a demo to
  // non-UGA people.
  //
  // ⚠️ If you are reading this ON OR AFTER 2026-08-27 and nothing else in the
  // repo records a decision, that is the signal this note is stale: ASK before
  // a production deploy rather than assuming the permission cleared. Removing
  // it is deleting this entry, nothing more.
  {
    name: 'Lamar Dodd School of Art',
    href: 'https://art.uga.edu',
    logo: '/logos/partners/lamar-dodd-school-of-art-lockup-white.png',
    width: 661,
    height: 160,
    alt: 'Lamar Dodd School of Art, the University of Georgia arch shield beside the school name',
    heightClass: 'h-9 sm:h-11',
  },
];
