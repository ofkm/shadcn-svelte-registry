import adapterNode from "@sveltejs/adapter-node";
import adapterStatic from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    // Use Node.js adapter by default
    adapter: {
      name: "custom-dual-adapter",
      async adapt(builder) {
        // First build with node adapter
        await adapterNode({
          out: "build",
        }).adapt(builder);

        // Then build with static adapter
        await adapterStatic({
          pages: "static",
          assets: "static",
          fallback: "index.html",
          precompress: false,
        }).adapt(builder);
      },
    },
  },
};

export default config;
