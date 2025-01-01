// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import sectionize from "@hbsnow/rehype-sectionize";
import { codeTransformer } from "./src/lib/codetransformer";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://samuelhorn.com",
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  markdown: {
    rehypePlugins: [sectionize as unknown as [string, any]],
    syntaxHighlight: "shiki",
    shikiConfig: {
      themes: {
        dark: "rose-pine-moon",
        light: "rose-pine-dawn",
      },
      transformers: [codeTransformer()],
    },
  },
  image: {
    domains: ["img.youtube.com"],
  },
});
