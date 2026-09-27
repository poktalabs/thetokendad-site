/**
 * FAQ items shared by the FAQ component and the FAQPage structured data.
 * `a` is the plain-text answer (it goes into the JSON-LD verbatim);
 * `html` is an optional marked-up version for the page (links, code).
 */
export interface FaqItem {
  q: string;
  a: string;
  html?: string;
}

export function faqJsonLd(items: FaqItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
