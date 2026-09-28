import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Published posts, newest first. Drafts are excluded from every surface
 * (blog index, dynamic routes, RSS), so a `draft: true` post is unreachable
 * in a production build rather than merely unlinked.
 *
 * In `astro dev` drafts ARE shown, so you can read and screenshot a post before
 * publishing it. `import.meta.env.DEV` is false in every `astro build`, which is
 * the only thing that ever gets deployed, so this cannot leak a draft.
 */
export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection(
    'blog',
    ({ data }) => data.draft !== true || import.meta.env.DEV,
  );
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Feed kind, inferred from tags until it becomes a schema field. */
const KINDS = ['guide', 'experiment', 'launch'] as const;
export function kindOf(tags: string[]): string {
  return KINDS.find((k) => tags.includes(k)) ?? 'post';
}

/**
 * A post's palette tone, by its position in the published list (newest
 * first), never by kind. The feed pill, the post's own pill and its
 * read-next card all agree because they all derive it from the index.
 */
export type Tone = 'orange' | 'magenta' | 'violet' | 'coral';
const TONES: Tone[] = ['orange', 'magenta', 'violet', 'coral'];
export function toneOf(index: number): Tone {
  return TONES[((index % TONES.length) + TONES.length) % TONES.length];
}
