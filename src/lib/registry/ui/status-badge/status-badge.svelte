<script lang="ts" module>
  import { tv, type VariantProps } from 'tailwind-variants';

  export const statusBadgeVariants = tv({
    base: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
    variants: {
      variant: {
        red: 'bg-red-500/15 text-red-700 border-red-700/20',
        purple: 'bg-purple-500/15 text-purple-700 border-purple-700/20',
        green: 'bg-green-500/20 text-green-600 border-green-600/20',
        blue: 'bg-blue-500/15 text-blue-700 border-blue-700/20',
        gray: 'bg-gray-400/15 text-gray-600 border-gray-600/20',
        amber: 'bg-amber-500/20 text-amber-600 border-amber-600/20',
        pink: 'bg-pink-500/15 text-pink-700 border-pink-700/20',
        indigo: 'bg-indigo-500/15 text-indigo-700 border-indigo-700/20',
        cyan: 'bg-cyan-500/15 text-cyan-700 border-cyan-700/20',
        lime: 'bg-lime-500/15 text-lime-700 border-lime-700/20',
        emerald: 'bg-emerald-500/20 text-emerald-700 border-emerald-700/20',
        teal: 'bg-teal-500/15 text-teal-700 border-teal-700/20',
        sky: 'bg-sky-500/15 text-sky-700 border-sky-700/20',
        violet: 'bg-violet-500/15 text-violet-700 border-violet-700/20',
        fuchsia: 'bg-fuchsia-500/15 text-fuchsia-700 border-fuchsia-700/20',
        rose: 'bg-rose-500/15 text-rose-700 border-rose-700/20',
        orange: 'bg-orange-500/15 text-orange-700 border-orange-700/20',
      },
    },
    defaultVariants: {
      variant: 'gray',
    },
  });
</script>

<script lang="ts">
  import { cn } from '$lib/utils.js';
  import type { WithElementRef } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';

  export type StatusBadgeProps = WithElementRef<HTMLAttributes<HTMLSpanElement>> &
    VariantProps<typeof statusBadgeVariants> & {
      text?: string;
      capitalize?: boolean;
      class?: string;
    };

  let { text, variant = 'gray', capitalize = true, class: className, ref = $bindable(null), children, ...restProps }: StatusBadgeProps = $props();

  function capitalizeFirst(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const displayText = $derived(() => {
    if (!text) return '';
    return capitalize ? capitalizeFirst(text) : text;
  });
</script>

<span bind:this={ref} class={cn(statusBadgeVariants({ variant }), className)} data-slot="status-badge" {...restProps}>
  {#if text}
    {displayText()}
  {:else}
    {@render children?.()}
  {/if}
</span>
