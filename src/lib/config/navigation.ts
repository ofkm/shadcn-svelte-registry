import { iconsConfig } from './icons.js';
import { componentsConfig } from './components.js';
import { utilsConfig } from './utils.js';

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
  new?: boolean;
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
        new: component.new,
        items: [] as SidebarNavItem[],
      })),
    ],
  },
  {
    title: 'Utils',
    items: [
      ...utilsConfig.map((util) => ({
        title: util.title,
        href: util.href,
        new: util.new,
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
