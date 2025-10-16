<script lang="ts">
  import DocsSidebar from '$lib/components/docs-sidebar.svelte';
  import { sidebarNavItems } from '$lib/navigation';

  let { children } = $props();
</script>

<div class="flex flex-1">
  <aside
    class="hidden h-[calc(100vh-4rem)] w-64 max-w-64 min-w-64 overflow-y-auto lg:block"
    style="position:fixed; top:4rem; left:0; z-index:30;">
    <DocsSidebar navItems={sidebarNavItems} />
  </aside>

  <main class="flex-1 overflow-y-auto lg:ml-64">
    <div class="mx-auto max-w-4xl pb-10 px-4 sm:px-6 lg:px-8">
      <!-- Page Content -->
      {@render children?.()}
    </div>
  </main>
</div>
