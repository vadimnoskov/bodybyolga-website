import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['Workouts', 'Nutrition', 'Mindset']),
    author: z.string().default('Olga'),
  }),
});

export const collections = { blog };
