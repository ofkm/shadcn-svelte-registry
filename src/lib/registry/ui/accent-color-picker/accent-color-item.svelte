<script lang="ts" module>
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  export type AccentColorItemProps = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    color: string;
    label: string;
    isSelected?: boolean;
    isCustomTrigger?: boolean;
    disabled?: boolean;
    onCustomClick?: () => void;
  };
</script>

<script lang="ts">
  import { RadioGroup, Label } from 'bits-ui';
  import { Check, Plus } from '@lucide/svelte';

  let {
    class: className,
    ref = $bindable(null),
    color,
    label,
    isSelected = false,
    isCustomTrigger = false,
    disabled = false,
    onCustomClick,
    ...restProps
  }: AccentColorItemProps = $props();

  const isDefaultColor = color === 'default';
</script>

<div bind:this={ref} class={cn('group/item relative', className)} {...restProps}>
  <RadioGroup.Item id={color} value={color} class="sr-only" {disabled} />

  <Label.Root
    for={color}
    class={cn(disabled ? 'cursor-not-allowed' : 'cursor-pointer', isCustomTrigger && 'group')}
    onclick={() => {
      if (isCustomTrigger && !disabled) {
        onCustomClick?.();
      }
    }}>
    <div
      class={cn(
        'relative z-10 size-8 rounded-full border-2 transition-all duration-200 ease-out',
        'group-hover/item:z-20 group-hover/item:scale-110',
        isDefaultColor && 'bg-black dark:bg-white'
      )}
      style={!isDefaultColor && color !== 'custom' ? `background-color: ${color}` : ''}
      title={label}>
      {#if isCustomTrigger}
        <div class="bg-muted absolute inset-0 flex items-center justify-center rounded-full border-2 border-dashed border-border">
          <Plus class="text-muted-foreground size-4" />
        </div>
      {:else if isSelected}
        <div class="absolute inset-0 flex items-center justify-center">
          <Check class="size-4 text-white drop-shadow-sm" />
        </div>
      {/if}
    </div>

    <!-- Tooltip -->
    <div
      class={cn(
        'text-muted-foreground group-hover/item:text-foreground bg-background',
        'absolute top-12 left-1/2 z-20 max-w-0 -translate-x-1/2 transform overflow-hidden',
        'rounded-md border px-2 py-1 text-xs whitespace-nowrap opacity-0 shadow-sm',
        'transition-all duration-300 ease-out',
        'group-hover/item:max-w-[100px] group-hover/item:opacity-100'
      )}>
      {label}
    </div>
  </Label.Root>
</div>
