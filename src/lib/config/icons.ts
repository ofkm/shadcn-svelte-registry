import type { Component } from 'svelte';
import { GitHubIcon, DockerIcon } from '$lib/registry/ui/icons';

export type IconConfig = {
  name: string;
  title: string;
  description: string;
  component: Component;
  href: string;
  registryName: string;
  importPath: string;
};

export const iconsConfig: IconConfig[] = [
  {
    name: 'github-icon',
    title: 'GitHub',
    description: 'GitHub SVG icon component',
    component: GitHubIcon,
    href: '/docs/icons/github-icon',
    registryName: 'github-icon',
    importPath: '$lib/registry/ui/icons/github/github.svelte',
  },
  {
    name: 'docker-icon',
    title: 'Docker',
    description: 'Docker SVG icon component',
    component: DockerIcon,
    href: '/docs/icons/docker-icon',
    registryName: 'docker-icon',
    importPath: '$lib/registry/ui/icons/docker/docker.svelte',
  },
];

export function getIconByName(name: string): IconConfig | undefined {
  return iconsConfig.find((icon) => icon.name === name);
}

export function getAllIconNames(): string[] {
  return iconsConfig.map((icon) => icon.name);
}
