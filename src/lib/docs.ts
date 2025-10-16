import { components, setup, utils, icons } from '$content';
import { error } from '@sveltejs/kit';
import type { Component } from 'svelte';

type CollectionDoc = (typeof setup)[number] | (typeof components)[number] | (typeof utils)[number] | (typeof icons)[number];

const allDocs: CollectionDoc[] = [...setup, ...components, ...utils, ...icons];

interface DocModule {
  default: Component;
  metadata?: Record<string, any>;
}

type DocResolver = () => Promise<DocModule>;
export type DocMetadata = CollectionDoc & Record<string, any>;

function transformPath(path: string): string {
  return path
    .replace(/\\/g, '/')
    .replace(/^.*\/content\//, '')
    .replace(/\.md$/, '')
    .replace(/\/index$/, '')
    .trim();
}

function getDocMetadata(slug: string): CollectionDoc | undefined {
  const clean = slug.replace(/^\/+/, '');
  return (
    allDocs.find((d) => d.path === clean) ||
    allDocs.find((d) => d.slug === clean) ||
    allDocs.find((d) => d.slug?.replace(/^\/+/, '') === clean)
  );
}

const modules = import.meta.glob<DocModule>('/content/**/*.md');

function resolveModule(slug: string): DocResolver | undefined {
  const key = Object.keys(modules).find((k) => transformPath(k) === slug);
  return key ? (modules[key] as DocResolver) : undefined;
}

export async function getDoc(_slug: string): Promise<{ component: Component; metadata: DocMetadata }> {
  const slug = _slug === '' || _slug === 'index' ? 'setup/introduction' : _slug;

  const resolver = resolveModule(slug);
  const metadata = getDocMetadata(slug);

  if (!resolver || !metadata) {
    console.error('Doc not found:', { slug, hasResolver: !!resolver, hasMetadata: !!metadata });
    error(404, `Documentation page not found: ${slug}`);
  }

  const mod = await resolver();

  return {
    component: mod.default,
    metadata: metadata as DocMetadata,
  };
}

export { components, setup, utils, icons, allDocs };
