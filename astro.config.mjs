import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(),
    NetlifyCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "main",
        },
        collections: [
          // Define a blog post collection
          {
            name: "pages",
            label: "Pages",
            folder: "src/content/pages/",
            create: true,
            delete: true,
            fields: [
              { name: "title", widget: "string", label: "Post Title" },
              { name: "body", widget: "markdown", label: "Post Body" },
            ],
          },
        ],
        previewStyles: [
          // Path to a local CSS file, relative to your project’s root directory
          'src/styles/index.css',
          'src/styles/theme.css',
        ],
      },
    }),
  ],
  site: `https://astro.build`,
});
