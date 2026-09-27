import type { CollectionEntry } from 'astro:content';
import { kindOf } from './posts';
import { LAB_ENTRIES, RESOURCE_ENTRIES } from '../consts';

/**
 * Entries the hero projector can throw onto its display. Three archives feed
 * it: the log (published posts), the lab (experiments and exhibits) and the
 * resources (feeds, places). Each entry is one card: readout, title, line, link.
 */
export type ProjectorKind = 'log' | 'lab' | 'res';

export interface ProjectorEntry {
  kind: ProjectorKind;
  /** second readout after the kind: launch, guide, exhibit, feed... */
  sub: string;
  /** ISO date or a short mono label (closed, live) */
  when: string;
  title: string;
  line: string;
  href: string;
}

const iso = (d: Date) => d.toISOString().slice(0, 10);

/** Round-robin across the three archives so the cycle alternates kinds. */
export function projectorEntries(posts: CollectionEntry<'blog'>[], max = 8): ProjectorEntry[] {
  const log: ProjectorEntry[] = posts.slice(0, 4).map((p) => ({
    kind: 'log',
    sub: kindOf(p.data.tags),
    when: iso(p.data.pubDate),
    title: p.data.title,
    line: p.data.description,
    href: `/blog/${p.id}/`,
  }));
  const lab: ProjectorEntry[] = LAB_ENTRIES.map((e) => ({ kind: 'lab', ...e }));
  const res: ProjectorEntry[] = RESOURCE_ENTRIES.map((e) => ({ kind: 'res', ...e }));

  const out: ProjectorEntry[] = [];
  const lists = [log, lab, res];
  for (let i = 0; out.length < max && lists.some((l) => i < l.length); i++) {
    for (const l of lists) if (i < l.length && out.length < max) out.push(l[i]);
  }
  return out;
}
