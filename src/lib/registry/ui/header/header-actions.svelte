<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { getContext } from 'svelte';
  import type { WithElementRef } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';

  export type HeaderActionsProps = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    class?: string;
  };

  let { class: className, ref = $bindable(null), children, ...restProps }: HeaderActionsProps = $props();

  const variant = getContext<string>('header-variant') ?? 'default';

  const spacingClass = $derived(() => {
    switch (variant) {
      case 'floating':
        return 'space-x-4';
      case 'sticky':
      case 'default':
      default:
        return 'space-x-2';
    }
  });
</script>

<div bind:this={ref} class={cn('flex items-center', spacingClass, className)} data-slot="header-actions" {...restProps}>
  {@render children?.()}
</div>
