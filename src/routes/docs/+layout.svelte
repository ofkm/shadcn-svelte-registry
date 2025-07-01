<script lang="ts">
  import { page } from '$app/state';
  import { Button } from '$lib/components/ui/button/index.js';
  import { ArrowLeft, ArrowRight } from '@lucide/svelte';
  import DocsSidebar from '$lib/components/docs-sidebar.svelte';
  import { SidebarNavItems } from '$lib/config/navigation';

  let { children } = $props();

  const allPages = SidebarNavItems.flatMap((section) => section.items);

  let currentPageIndex = $derived(allPages.findIndex((item) => item.href === page.url.pathname));
  let previousPage = $derived(currentPageIndex > 0 ? allPages[currentPageIndex - 1] : null);
  let nextPage = $derived(currentPageIndex < allPages.length - 1 ? allPages[currentPageIndex + 1] : null);
</script>

<div class="flex flex-1">
  <aside class="hidden h-[calc(100vh-4rem)] w-64 max-w-64 min-w-64 overflow-y-auto lg:block" style="position:fixed; top:4rem; left:0; z-index:30;">
    <DocsSidebar navItems={SidebarNavItems} />
  </aside>

  <main class="flex-1 overflow-y-auto lg:ml-64">
    <div class="mx-auto max-w-4xl pb-10 px-4 sm:px-6 lg:px-8">
      <!-- Page Content -->
      {@render children?.()}

      <div class="flex items-center justify-between mt-16 pt-8 border-t">
        <div>
          {#if previousPage}
            <Button href={previousPage.href} variant="outline" class="flex-shrink-0">
              <ArrowLeft class="mr-2 size-4" />
              <div class="text-left hidden sm:block">
                <div class="text-xs text-muted-foreground">{previousPage.title}</div>
              </div>
            </Button>
          {/if}
        </div>
        <div>
          {#if nextPage}
            <Button href={nextPage.href} variant="outline" class="flex-shrink-0">
              <div class="text-right hidden sm:block">
                <div class="text-xs text-muted-foreground">{nextPage.title}</div>
              </div>
              <ArrowRight class="ml-2 size-4" />
            </Button>
          {/if}
        </div>
      </div>
    </div>
  </main>
</div>
