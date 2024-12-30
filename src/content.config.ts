import { defineCollection, z } from "astro:content";
import { notionLoader } from "notion-astro-loader";
import {
  notionPageSchema,
  propertySchema,
  transformedPropertySchema,
} from "notion-astro-loader/schemas";
import rehypeShiki from "@shikijs/rehype";
import sectionize from "@hbsnow/rehype-sectionize";

const blog = defineCollection({
  loader: notionLoader({
    auth: import.meta.env.NOTION_TOKEN,
    database_id: "168a5072f11480f093f4ef00f00edf2f",
    filter: {
      property: "published",
      checkbox: { equals: true },
    },
    rehypePlugins: [
      sectionize as unknown as [string, any],
      [
        rehypeShiki,
        {
          themes: {
            dark: "rose-pine-moon",
            light: "rose-pine-dawn",
          },
        },
      ],
    ],
  }),
  schema: notionPageSchema({
    properties: z.object({
      Name: transformedPropertySchema.title,
      created: propertySchema.created_time.optional(),
      tags: transformedPropertySchema.multi_select,
      slug: transformedPropertySchema.rich_text,
    }),
  }),
});

export const collections = { blog };
