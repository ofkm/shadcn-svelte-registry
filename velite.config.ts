import { defineCollection, defineConfig, s } from 'velite';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';

// Schema for component documentation
const componentSchema = s
  .object({
    title: s.string(),
    description: s.string(),
    path: s.path(),
    component: s.boolean().default(true),
    isNew: s.boolean().default(false),
    links: s
      .object({
        doc: s.string().optional(),
        api: s.string().optional(),
        source: s.string().optional(),
      })
      .optional(),
    toc: s.toc(),
  })
  .transform((data) => {
    return {
      ...data,
      slug: data.path,
      slugFull: `/${data.path}`,
    };
  });

// Schema for general documentation
const docSchema = s
  .object({
    title: s.string(),
    description: s.string(),
    path: s.path(),
    links: s
      .object({
        doc: s.string().optional(),
        api: s.string().optional(),
        source: s.string().optional(),
      })
      .optional(),
    toc: s.toc(),
  })
  .transform((data) => {
    return {
      ...data,
      slug: data.path,
      slugFull: `/${data.path}`,
    };
  });

// Components collection
const components = defineCollection({
  name: 'components',
  pattern: 'components/**/*.md',
  schema: componentSchema,
});

// Setup/getting started collection
const setup = defineCollection({
  name: 'setup',
  pattern: 'setup/**/*.md',
  schema: docSchema,
});

// Utils/utilities collection
const utils = defineCollection({
  name: 'utils',
  pattern: 'utils/**/*.md',
  schema: docSchema,
});

// Icons collection
const icons = defineCollection({
  name: 'icons',
  pattern: 'icons/**/*.md',
  schema: docSchema,
});

export default defineConfig({
  root: './content',
  output: { assets: 'static' },
  collections: { components, setup, utils, icons },
});
