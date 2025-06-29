<script lang="ts">
  import { page } from '$app/stores';
  import { Button } from '$lib/components/ui/button/index.js';
  import { ArrowLeft, ArrowRight } from '@lucide/svelte';
  import DocsSidebar from '$lib/components/docs-sidebar.svelte';
  import { SidebarNavItems } from '$lib/config/navigation';

  let { children } = $props();

  // Flatten all navigation items to find current page and navigation
  const allPages = SidebarNavItems.flatMap((section) => section.items);

  // Runes syntax for reactive state
  let currentPageIndex = $derived(allPages.findIndex((item) => item.href === $page.url.pathname));
  let previousPage = $derived(currentPageIndex > 0 ? allPages[currentPageIndex - 1] : null);
  let nextPage = $derived(currentPageIndex < allPages.length - 1 ? allPages[currentPageIndex + 1] : null);
</script>

<div class="flex flex-1">
  <aside class="hidden h-[calc(100vh-4rem)] w-64 max-w-64 min-w-64 overflow-y-auto lg:block" style="position:fixed; top:4rem; left:0; z-index:30;">
    <DocsSidebar navItems={SidebarNavItems} />
  </aside>

  <main class="flex-1 overflow-y-auto lg:ml-64">
    <div class="mx-auto max-w-4xl p-10">
      <!-- Page Navigation -->
      <div class="flex items-center justify-between mb-8">
        <div>
          {#if previousPage}
            <Button href={previousPage.href} variant="ghost" size="sm">
              <ArrowLeft class="mr-1 size-4" />
              Previous
            </Button>
          {/if}
        </div>
        <div>
          {#if nextPage}
            <Button href={nextPage.href} variant="ghost" size="sm">
              Next
              <ArrowRight class="ml-1 size-4" />
            </Button>
          {/if}
        </div>
      </div>

      <!-- Page Content -->
      {@render children?.()}

      <!-- Bottom Navigation (optional - for better UX) -->
      <div class="flex items-center justify-between mt-16 pt-8 border-t">
        <div>
          {#if previousPage}
            <Button href={previousPage.href} variant="outline">
              <ArrowLeft class="mr-2 size-4" />
              <div class="text-left">
                <div class="text-xs text-muted-foreground">{previousPage.title}</div>
              </div>
            </Button>
          {/if}
        </div>
        <div>
          {#if nextPage}
            <Button href={nextPage.href} variant="outline">
              <div class="text-right">
                <div class="text-xs text-muted-foreground">{nextPage.title}</div>
              </div>
              <ArrowRight class="size-4" />
            </Button>
          {/if}
        </div>
      </div>
    </div>
  </main>
</div>
