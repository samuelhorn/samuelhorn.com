import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

const collectionEntries = await getCollection("blog");
const pages = Object.fromEntries(
  collectionEntries.map(({ id, data }) => [id, data])
);

export const { getStaticPaths, GET } = OGImageRoute({
  pages: pages,
  param: "route",
  getImageOptions: (path, page) => ({
    title: page.title,
    logo: {
      path: "./src/assets/oglogo.png",
      size: [300],
    },
    padding: 60,
    font: {
      title: { size: 90, families: ["Space Grotesk"], weight: "Bold" },
    },
    fonts: [
      "./node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff2",
    ],

    bgImage: {
      path: "./src/assets/ogbg.png",
      fit: "cover",
    },
  }),
});
