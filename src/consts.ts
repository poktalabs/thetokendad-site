// Site-wide constants. Content, not design: safe to edit without touching layout.

export const SITE_TITLE = 'The Token Dad';
export const SITE_URL = 'https://thetoken.dad';

// The proposition, decided 2026-08-07: a dad building in public.
export const SITE_DESCRIPTION =
  'A dad automating his way out of the overwhelm, and publishing what it costs.';

// Home hero copy (Mel, 2026-09-27, revised the same evening). Three lines;
// the emphasis takes the sun gradient, and the display word gets the sun
// as its O.
export const HOME_STATEMENT = {
  lead: 'Just a dad',
  word: 'TOKENMAXXING',
  tail: 'for',
  tailEmphasis: 'good',
};
export const HOME_LEDE =
  'Learning AI to build apps for every day, because tech is meant to improve lives.';

export const AUTHOR = 'Mel';

// The Writing page's hero doubles as the about: who is writing, in three
// sentences. First draft, 2026-09-27; Mel's to rewrite.
export const ABOUT_HEADLINE = "I'm Mel, a dad who forgets things.";
export const ABOUT_BIO =
  'So I build agents that remember them, and I write down what each build costs and what broke, so you can replicate it. Guides and posts from the bench, newest first.';

// Home FAQ (first draft, 2026-09-27). Plain answers feed the FAQPage
// structured data; `html` is the on-page version when a link belongs in it.
export const HOME_FAQ = [
  {
    q: 'What is The Token Dad?',
    a: 'One dad building with machines in public, and publishing what it costs. Guides you can replicate, experiments that sometimes fail, and the bill for each.',
  },
  {
    q: 'Who is this for?',
    a: 'Anyone who wants to learn to build with tech and take home something they can replicate. You do not need kids. The dad part is my voice, not a filter on who reads.',
  },
  {
    q: 'What do you mean by receipts?',
    a: 'Every published number carries its method: tokens measured, cost modelled, assumptions stated. When a number turns out wrong, I correct it in public.',
  },
  {
    q: 'What is the lab?',
    a: 'Experiments, including the closed ones. The first was the Website Challenge: four AI design tools, one frozen brief. Its record and the four frozen builds are still up.',
    html: '<p>Experiments, including the closed ones. The first was the <a href="/website-challenge-v1/">Website Challenge</a>: four AI design tools, one frozen brief. Its record and the four frozen builds are still up.</p>',
  },
  {
    q: 'How do I follow along?',
    a: 'RSS, or @thetokendad on Instagram. No newsletter, no login, nothing to sign up for.',
    html: '<p><a href="/rss.xml">RSS</a>, or <a href="https://instagram.com/thetokendad">@thetokendad</a> on Instagram. No newsletter, no login, nothing to sign up for.</p>',
  },
];

export const SOCIAL = {
  instagram: 'https://instagram.com/thetokendad',
} as const;

// Studio: launched projects, the portfolio. One card each, in Mel's order
// (2026-09-27). `when` is optional: the eyebrow shows it when known.
export const STUDIO_PROJECTS = [
  {
    title: 'Godinez.AI',
    line: 'Agent platform for Latam founders and SMBs: tested workflows and automations for your day-to-day work.',
    href: 'https://godinez.ai',
    status: 'live',
  },
  {
    title: 'RheumAI',
    line: 'Intelligence for rheumatology. Doctors upload a clinical document and chat with a rheumatology-trained AI: a second opinion, an easy-to-follow patient care plan, and data that feeds rheumatology research.',
    href: 'https://rheumai.xyz',
    status: 'live',
  },
  {
    title: 'BUDDi',
    line: 'The AI companion designed to get you a job. Search, match, apply and prep: everything you need to land an interview and excel at it.',
    href: 'https://buddi.agentcamp.xyz',
    status: 'live',
  },
  {
    title: 'Agent Launcher',
    line: 'Deploy your personal Hermes agent in 30 seconds, on demand, ready for you.',
    href: 'https://launcher.agentcamp.xyz',
    status: 'live',
  },
  {
    title: 'DNAI',
    line: 'Agent for clinical research. Non-technical researchers build and ship the tools that make their day-to-day work easier.',
    href: 'https://dnai-astro.pages.dev/',
    status: 'live',
  },
  {
    title: 'internOS',
    line: 'Open-source framework for human-agent collaboration: a skill that coordinates work through opinionated filesystem conventions, so LLMs share and update state inside one workstream.',
    href: 'https://github.com/poktalabs/intern-os',
    status: 'open source',
  },
  {
    title: 'thetoken.dad',
    line: 'This site. Astro on Cloudflare, designed in public over seven hero rounds, every version frozen at its own address.',
    href: '/',
    status: 'live',
    when: '2026-08-07',
  },
] as const;

// Lab: builds in progress. Empty until something is on the bench and on
// the record; the lab page says so rather than inventing one.
export const LAB_BUILDS: { title: string; line: string; href?: string; when: string }[] = [];

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
