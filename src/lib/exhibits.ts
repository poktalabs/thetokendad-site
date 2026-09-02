// The four Website Challenge exhibits, one frozen brief, four AI design tools.
// Shared by the homepage carousel (ExhibitCarousel / Showcase) and the vote
// page (/website-challenge-v1/vote/) so their data can never drift apart.
//
// `image` is the dark hero screenshot of each live exhibit, captured at
// 1280x800 (the site's primary theme). Imported here so astro:assets optimises
// it once and both surfaces reuse the same asset.

import designImg from '../assets/exhibits/design.png';
import impeccableImg from '../assets/exhibits/impeccable.png';
import tasteImg from '../assets/exhibits/taste.png';
import gstackImg from '../assets/exhibits/gstack.png';

export interface Exhibit {
  slug: string;
  tool: string;
  arm: string;
  url: string;
  character: string;
  image: ImageMetadata;
}

export const EXHIBITS: Exhibit[] = [
  {
    slug: 'design',
    tool: 'frontend-design',
    arm: 'Arm 1',
    url: 'https://claude-design-v1.thetoken.dad',
    character:
      'Asked nothing, filled every gap itself, shipped in one pass. Cheapest of the four by a factor of six, and it also designed the page you are reading this on.',
    image: designImg,
  },
  {
    slug: 'impeccable',
    tool: 'Impeccable',
    arm: 'Arm 2',
    url: 'https://claude-impeccable-v1.thetoken.dad',
    character:
      'Built, reviewed itself behind a fix-or-ship gate, and documented from source, twice, until it would pass its own review.',
    image: impeccableImg,
  },
  {
    slug: 'taste',
    tool: 'Taste',
    arm: 'Arm 3',
    url: 'https://claude-taste-v1.thetoken.dad',
    character:
      'Interviewed hardest of the four and held the strictest line on copy, then handed over React that had to be translated to ship.',
    image: tasteImg,
  },
  {
    slug: 'gstack',
    tool: 'gstack',
    arm: 'Arm 4',
    url: 'https://claude-gstack-v1.thetoken.dad',
    character:
      'Ran a structured 13-finding review with a second model as an outside voice. Caught a colour that could never have rendered.',
    image: gstackImg,
  },
];
