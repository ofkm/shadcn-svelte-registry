import { mdsx } from 'mdsx';
import adapterNode from '@sveltejs/adapter-node';
import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsxConfig } from './mdsx.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess(), mdsx(mdsxConfig)],
  extensions: ['.svelte', '.md'],
  kit: {
    alias: {
      $content: './.velite',
    },
    adapter: {
      name: 'custom-dual-adapter',
      async adapt(builder) {
        // First build with node adapter
        await adapterNode({
          out: 'build',
        }).adapt(builder);

        // Then build with static adapter
        await adapterStatic({
          pages: 'static',
          assets: 'static',
          fallback: 'index.html',
          precompress: false,
        }).adapt(builder);
      },
    },
  },
};

export default config;
