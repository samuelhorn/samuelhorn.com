import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      tags: z.array(z.string()),
      cover: image(),
      // Reference a single author from the `authors` collection by `id`
      // author: reference('authors'),
      // Reference an array of related posts from the `blog` collection by `slug`
      // relatedPosts: z.array(reference('blog')),
    }),
});

export const collections = { blog };
