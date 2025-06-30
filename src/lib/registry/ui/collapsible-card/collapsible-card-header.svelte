<script lang="ts" module>
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  export type CollapsibleCardHeaderProps = WithElementRef<HTMLButtonAttributes> & {
    builders?: any[];
  };
</script>

<script lang="ts">
  import ChevronDown from '@lucide/svelte/icons/chevron-down';

  let { class: className, ref = $bindable(null), type = 'button', disabled, builders = [], children, ...restProps }: CollapsibleCardHeaderProps = $props();
</script>

<button
  bind:this={ref}
  use:builders[0]
  data-slot="collapsible-card-header"
  class={cn(
    'flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
    className
  )}
  {type}
  {disabled}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
  <ChevronDown class="size-4 shrink-0 transition-transform duration-200" />
</button>
