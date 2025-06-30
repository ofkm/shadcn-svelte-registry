<script lang="ts">
  import * as Sidebar from '$lib/components/ui/sidebar/index.js';
  import { page } from '$app/state';
  import { SidebarNavItems } from '$lib/config/navigation.js';
  import type { SidebarNavItem } from '$lib/config/navigation';
  import type { ComponentProps } from 'svelte';
  import { BookOpen, Layers, Palette, Settings } from '@lucide/svelte';
  import { Button } from '$lib/registry/ui/button/index.js';
  import NewBadge from '$lib/components/ui/new-badge.svelte';

  let { navItems, ...restProps }: { navItems: SidebarNavItem[] } & ComponentProps<typeof Sidebar.Root> = $props();

  const pathname = $derived(page.url.pathname);

  // Map section titles to icons
  const sectionIcons: Record<string, any> = {
    'Get Started': BookOpen,
    Components: Layers,
    Icons: Palette,
    Utils: Settings,
  };

  function handleAnchorClick(event: Event, href: string) {
    if (href.startsWith('#')) {
      event.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
</script>

<Sidebar.Root class="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-64 border-r border-border bg-background lg:flex" collapsible="none" {...restProps}>
  <Sidebar.Content class="flex flex-col p-4">
    <div class="flex-1 space-y-6">
      {#each navItems as item (item.title)}
        <Sidebar.Group>
          <Sidebar.GroupLabel class="mb-2 flex items-center space-x-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {#if sectionIcons[item.title]}
              {@const SectionIcon = sectionIcons[item.title]}
              <SectionIcon class="h-4 w-4" />
            {/if}
            <span>{item.title}</span>
          </Sidebar.GroupLabel>
          <Sidebar.GroupContent>
            {#if item.items.length}
              <Sidebar.Menu class="space-y-0.5">
                {#each item.items as subItem (subItem.href)}
                  {#if subItem.items.length === 0}
                    <Sidebar.MenuItem>
                      {#if subItem.anchor}
                        <a
                          href={subItem.href}
                          onclick={(e) => subItem.href && handleAnchorClick(e, subItem.href)}
                          class="block w-full rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted/50 {subItem.href === pathname ? 'bg-muted font-medium text-foreground' : 'text-muted-foreground'}"
                        >
                          {subItem.title}
                          {#if subItem.new}
                            <NewBadge class="ml-2" />
                          {/if}
                        </a>
                      {:else}
                        <a href={subItem.href} class="block w-full rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted/50 {subItem.href === pathname ? 'bg-muted font-medium text-foreground' : 'text-muted-foreground'}">
                          {subItem.title}
                          {#if subItem.new}
                            <NewBadge class="ml-2" />
                          {/if}
                        </a>
                      {/if}
                    </Sidebar.MenuItem>
                  {/if}
                {/each}
              </Sidebar.Menu>
            {/if}
          </Sidebar.GroupContent>
        </Sidebar.Group>
      {/each}
    </div>

    <div class="mt-auto border-t border-border pt-4">
      <div class="rounded-lg border border-dashed border-border p-3 text-center">
        <p class="text-xs text-muted-foreground">Checkout the amazing original shadcn-svelte project</p>
        <Button class="mt-2 rounded-md border border-border px-3 h-7 text-xs transition-colors hover:bg-muted" variant="outline" onclick={() => (window.location.href = 'https://shadcn-svelte.com/')}>shadcn-svelte</Button>
      </div>
    </div>
  </Sidebar.Content>
</Sidebar.Root>
