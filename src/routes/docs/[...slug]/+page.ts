import { getDoc } from '$lib/docs';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ params }) => {
  const slug = params.slug === '' ? 'setup/introduction' : params.slug;
  const doc = await getDoc(slug);
  return doc;
};
