<script lang="ts">
  import { cn } from '$lib/utils.js';
  import type { WithElementRef } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';

  export type HeaderNavProps = WithElementRef<HTMLAttributes<HTMLElement>> & {
    class?: string;
  };

  let { class: className, ref = $bindable(null), children, ...restProps }: HeaderNavProps = $props();
</script>

<nav bind:this={ref} class={cn('flex items-center space-x-2', className)} data-slot="header-nav" {...restProps}>
  {@render children?.()}
</nav>
