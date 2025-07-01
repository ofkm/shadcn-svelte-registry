<script lang="ts">
  import { cn } from '$lib/utils.js';
  import type { WithElementRef } from 'bits-ui';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  export type HeaderBrandProps = WithElementRef<HTMLAnchorAttributes> & {
    href?: string;
    class?: string;
  };

  let { href = '/', class: className, ref = $bindable(null), children, ...restProps }: HeaderBrandProps = $props();
</script>

<a bind:this={ref} {href} class={cn('flex items-center space-x-3 font-medium transition-colors hover:text-foreground/80', className)} data-slot="header-brand" {...restProps}>
  {@render children?.()}
</a>
