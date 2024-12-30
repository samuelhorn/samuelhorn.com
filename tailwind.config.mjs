/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: false,
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        headings: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        background: "var(--background)",
        "background-alt": "var(--background-alt)",
        border: "var(--border)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
