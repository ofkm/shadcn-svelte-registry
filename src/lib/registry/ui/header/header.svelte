<script lang="ts">
  import { cn } from '$lib/utils.js';
  import type { WithElementRef } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';

  export type HeaderProps = WithElementRef<HTMLAttributes<HTMLElement>> & {
    variant?: 'default' | 'sticky' | 'floating';
    border?: boolean;
    blur?: boolean;
    height?: 'sm' | 'md' | 'lg';
    class?: string;
  };

  let { variant = 'sticky', border = true, blur = true, height = 'md', class: className, ref = $bindable(null), children, ...restProps }: HeaderProps = $props();

  const variants = {
    default: 'relative w-full',
    sticky: 'sticky top-0 z-50 w-full',
    floating: 'fixed top-4 left-1/2 -translate-x-1/2 z-50 mx-auto max-w-5xl rounded-lg shadow-lg',
  };

  const heightClasses = {
    sm: 'h-14',
    md: 'h-[70px]',
    lg: 'h-20',
  };

  const borderClass = border ? 'border-b border-border/40' : '';
  const blurClass = blur ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-background';
  const marginClass = variant !== 'floating' ? 'mb-10' : '';
</script>

<header bind:this={ref} class={cn(variants[variant], heightClasses[height], borderClass, blurClass, marginClass, className)} data-slot="header" {...restProps}>
  {@render children?.()}
</header>
