<script lang="ts" module>
  import { tv, type VariantProps } from 'tailwind-variants';

  export const headerVariants = tv({
    base: 'w-full',
    variants: {
      variant: {
        default: 'relative',
        sticky: 'sticky top-0 z-50',
        floating: 'fixed top-4 left-1/2 -translate-x-1/2 z-50 mx-auto max-w-5xl rounded-lg shadow-lg',
      },
      height: {
        sm: 'h-14',
        md: 'h-[70px]',
        lg: 'h-20',
      },
      border: {
        true: 'border-b border-border/40',
        false: '',
      },
      blur: {
        true: 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        false: 'bg-background',
      },
    },
    compoundVariants: [
      {
        variant: ['default', 'sticky'],
        class: 'mb-10',
      },
    ],
    defaultVariants: {
      variant: 'sticky',
      height: 'md',
      border: true,
      blur: true,
    },
  });
</script>

<script lang="ts">
  import { cn } from '$lib/utils.js';
  import type { WithElementRef } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';

  export type HeaderProps = WithElementRef<HTMLAttributes<HTMLElement>> &
    VariantProps<typeof headerVariants> & {
      class?: string;
    };

  let { variant = 'sticky', border = true, blur = true, height = 'md', class: className, ref = $bindable(null), children, ...restProps }: HeaderProps = $props();
</script>

<header bind:this={ref} class={cn(headerVariants({ variant, height, border, blur }), className)} data-slot="header" {...restProps}>
  {@render children?.()}
</header>
