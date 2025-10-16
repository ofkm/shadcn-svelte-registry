<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
  import { cn } from '$lib/utils.js';
  import PanelLeftIcon from '@lucide/svelte/icons/panel-left';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { useSidebar } from './context.svelte.js';

  interface SidebarTriggerProps extends HTMLButtonAttributes {
    ref?: HTMLButtonElement | null;
    class?: string;
    onclick?: (e: MouseEvent) => void;
  }

  let { ref = $bindable(null), class: className, onclick, ...restProps }: SidebarTriggerProps = $props();

  const sidebar = useSidebar();
</script>

<Button
  bind:ref
  data-sidebar="trigger"
  data-slot="sidebar-trigger"
  variant="ghost"
  size="icon"
  class={cn('size-7', className)}
  type="button"
  {...restProps}
  onclick={(e) => {
    onclick?.(e);
    sidebar.toggle();
  }}>
  <PanelLeftIcon />
  <span class="sr-only">Toggle Sidebar</span>
</Button>
