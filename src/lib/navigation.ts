import { components, setup, utils, icons } from '$content';

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

function generateSetupNav(): SidebarNavItem[] {
  return setup.map((doc) => ({
    title: doc.title,
    href: `/docs/${doc.slug}`,
    items: [],
  }));
}

function generateComponentsNav(): SidebarNavItem[] {
  return components
    .filter((doc) => doc.slug !== 'components') // Exclude the index page
    .map((doc) => ({
      title: doc.title,
      href: `/docs/${doc.slug}`,
      new: doc.isNew,
      items: [],
    }));
}

function generateUtilsNav(): SidebarNavItem[] {
  return utils
    .filter((doc) => doc.slug !== 'utils') // Exclude the index page
    .map((doc) => ({
      title: doc.title,
      href: `/docs/${doc.slug}`,
      items: [],
    }));
}

function generateIconsNav(): SidebarNavItem[] {
  return icons
    .filter((doc) => doc.slug !== 'icons') // Exclude the index page
    .map((doc) => ({
      title: doc.title,
      href: `/docs/${doc.slug}`,
      items: [],
    }));
}

export const sidebarNavItems: SidebarNavItem[] = [
  {
    title: 'Get Started',
    items: generateSetupNav(),
  },
  {
    title: 'Components',
    items: generateComponentsNav(),
  },
  {
    title: 'Utils',
    items: generateUtilsNav(),
  },
  {
    title: 'Icons',
    items: generateIconsNav(),
  },
];

export const mainNavItems: NavItem[] = [
  {
    title: 'Components',
    href: '/docs/components',
  },
  {
    title: 'Utils',
    href: '/docs/utils',
  },
  {
    title: 'Icons',
    href: '/docs/icons',
  },
];

// Get all navigation items in a flat array for previous/next navigation
export function getFullNavItems(): Array<SidebarNavItem & { index: number }> {
  return [...generateSetupNav(), ...generateComponentsNav(), ...generateUtilsNav(), ...generateIconsNav()].map((item, index) => ({
    ...item,
    index,
  }));
}

export function findNeighbors(pathName: string): {
  previous: SidebarNavItem | null;
  next: SidebarNavItem | null;
} {
  const fullNavItems = getFullNavItems();
  const currentIndex = fullNavItems.findIndex((item) => item.href === pathName);

  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: currentIndex > 0 ? fullNavItems[currentIndex - 1] : null,
    next: currentIndex < fullNavItems.length - 1 ? fullNavItems[currentIndex + 1] : null,
  };
}
