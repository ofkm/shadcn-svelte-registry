<script lang="ts">
  import { cn } from '$lib/utils.js';
  import type { WithElementRef } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';

  export type HeaderContainerProps = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'custom' | 'floating';
    class?: string;
  };

  let { size = 'full', padding = 'custom', class: className, ref = $bindable(null), children, ...restProps }: HeaderContainerProps = $props();

  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-8xl',
    full: 'w-full',
  };

  const paddingClasses = {
    none: 'px-0',
    sm: 'px-3 sm:px-4',
    md: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-6 sm:px-8 lg:px-12',
    custom: 'pl-4 pr-2',
    floating: 'px-8 py-2',
  };
</script>

<div bind:this={ref} class={cn('flex h-full items-center justify-between', sizeClasses[size], paddingClasses[padding], className)} data-slot="header-container" {...restProps}>
  {@render children?.()}
</div>
