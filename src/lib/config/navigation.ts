import { iconsConfig } from './icons.js';

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
      { title: 'Dropdown Button', href: '/docs/dropdown-button', items: [] },
      { title: 'Meter', href: '/docs/meter', items: [] },
      { title: 'Status Badge', href: '/docs/status-badge', items: [] },
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
