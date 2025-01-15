// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://orangesmeme.github.io",
  integrations: [
    starlight({
      title: "Orange",
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
      ],
      social: {
        github: "https://github.com/orangesmeme/orangesmeme.github.io",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Guide to Orange", slug: "guides/orange" },
            { label: "Community", slug: "guides/community" },
          ],
        },
        {
          label: "Events",
          autogenerate: { directory: "events" },
        },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
