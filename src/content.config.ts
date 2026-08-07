import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// NOTE: `z` is imported from 'zod', never from 'astro:content'. The astro:content
// re-export is deprecated in Astro 7 and emits ts(6385) on every schema field.
// See workstreams/thetokendad-website/docs/stack.md.
import { z } from 'zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
