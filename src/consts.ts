// Site-wide constants. Content, not design: safe to edit without touching layout.

export const SITE_TITLE = 'The Token Dad';
export const SITE_URL = 'https://thetoken.dad';

// The proposition, decided 2026-08-07: a dad building in public.
export const SITE_DESCRIPTION =
  'A dad automating his way out of the overwhelm, and publishing what it costs.';

// Home hero copy (Mel, 2026-09-27). The display word gets the sun as its O;
// the emphasis takes the sun gradient.
export const HOME_STATEMENT = {
  word: 'TOKENMAXXING',
  tail: 'for',
  tailEmphasis: 'good',
  lineHead: 'Because',
  lineEmphasis: 'tech',
  line: 'is meant to',
  emphasis: 'improve lives',
};
export const HOME_LEDE =
  'Guides you can replicate, experiments that sometimes fail, and every peso it costs. Updated from the bench.';

export const AUTHOR = 'Mel';

export const SOCIAL = {
  instagram: 'https://instagram.com/thetokendad',
} as const;

// Hero projector: the lab and resource archives. Log entries come from the
// posts themselves (lib/projector.ts). Edit freely; each is one card.
export const LAB_ENTRIES = [
  {
    sub: 'exhibit',
    when: 'closed',
    title: 'website-challenge-v1',
    line: 'Four tools were given the same brief. One typeface came back four times; the processes did not. Frozen and archived.',
    href: '/website-challenge-v1/',
  },
  {
    sub: 'archive',
    when: '2026-08-07',
    title: 'Day zero, frozen at v0',
    line: 'The site the way it launched, kept at its own address so nobody has to take my word for it.',
    href: 'https://v0.thetoken.dad',
  },
] as const;

export const RESOURCE_ENTRIES = [
  {
    sub: 'feed',
    when: 'live',
    title: 'The log, in your reader',
    line: 'Every published entry as RSS. Subscribe once, read wherever.',
    href: '/rss.xml',
  },
  {
    sub: 'social',
    when: 'live',
    title: '@thetokendad',
    line: 'Bench notes and the occasional receipt, on Instagram.',
    href: SOCIAL.instagram,
  },
] as const;
