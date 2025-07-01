<script lang="ts">
  import { cn } from '$lib/utils.js';
  import type { WithElementRef } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';

  export type HeaderSpacerProps = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    class?: string;
  };

  let { class: className, ref = $bindable(null), ...restProps }: HeaderSpacerProps = $props();
</script>

<div bind:this={ref} class={cn('flex-1', className)} data-slot="header-spacer" {...restProps}></div>
