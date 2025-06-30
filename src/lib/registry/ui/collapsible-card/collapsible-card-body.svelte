<script lang="ts" module>
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  export type CollapsibleCardBodyProps = WithElementRef<HTMLAttributes<HTMLDivElement>>;
</script>

<script lang="ts">
  let { class: className, ref = $bindable(null), children, ...restProps }: CollapsibleCardBodyProps = $props();
</script>

<div bind:this={ref} data-slot="collapsible-card-body" class={cn('p-4', className)} {...restProps}>
  {@render children?.()}
</div>
