import { iconsConfig } from './icons.js';
import { componentsConfig } from './components.js';

export const mainNavItems = [
  // { href: '/docs/icons', label: 'Icons' }
];

export type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  anchor?: boolean;
};

export type SidebarNavItem = NavItem & {
  items: SidebarNavItem[];
};

export const SidebarNavItems: SidebarNavItem[] = [
  {
    title: 'Get Started',
    items: [
      { title: 'Introduction', href: '/docs', items: [] },
      { title: 'Installation', href: '/docs/setup', items: [] },
    ],
  },
  {
    title: 'Components',
    items: [
      ...componentsConfig.map((component) => ({
        title: component.title,
        href: component.href,
        items: [] as SidebarNavItem[],
      })),
    ],
  },
  {
    title: 'Icons',
    items: [
      { title: 'Overview', href: '/docs/icons', items: [] },
      ...iconsConfig.map((icon) => ({
        title: icon.title,
        href: icon.href,
        items: [] as SidebarNavItem[],
      })),
    ],
  },
];
