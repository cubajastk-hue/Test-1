import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "d962bdb9-bfcb-4495-9f1e-fce87ca5e799",
  token: "98d5b7ab21aa935449158c558aa0a915bee85973",
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Příspěvky",
        path: "content",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Nadpis" },
          { type: "string", name: "text", label: "Text", ui: { component: "textarea" } }
        ],
      },
    ],
  },
});
