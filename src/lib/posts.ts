import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Published posts, newest first. Drafts are excluded from every surface —
 * blog index, dynamic routes, RSS — so a `draft: true` post is unreachable
 * in a build rather than merely unlinked.
 */
export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog', ({ data }) => data.draft !== true);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
