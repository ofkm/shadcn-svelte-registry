<script lang="ts" module>
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  export type AccentColor = {
    label: string;
    color: string;
  };

  export type AccentColorPickerProps = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    colors?: AccentColor[];
    selectedColor?: string;
    previousColor?: string;
    disabled?: boolean;
    onColorChange?: (color: string) => void;
  };

  export const defaultAccentColors: AccentColor[] = [
    { label: 'Default', color: 'oklch(0.606 0.25 292.717)' },
    { label: 'Rose', color: 'oklch(0.63 0.2 15)' },
    { label: 'Orange', color: 'oklch(0.68 0.2 50)' },
    { label: 'Amber', color: 'oklch(0.75 0.18 80)' },
    { label: 'Green', color: 'oklch(0.65 0.2 150)' },
    { label: 'Teal', color: 'oklch(0.6 0.15 180)' },
    { label: 'Blue', color: 'oklch(0.6 0.2 240)' },
  ];
</script>

<script lang="ts">
  import { RadioGroup } from 'bits-ui';
  import Item from './accent-color-item.svelte';
  import CustomDialog from './accent-color-custom-dialog.svelte';

  let {
    class: className,
    ref = $bindable(null),
    colors = defaultAccentColors,
    selectedColor = $bindable(''),
    previousColor = '',
    disabled = false,
    onColorChange,
    ...restProps
  }: AccentColorPickerProps = $props();

  let showCustomColorDialog = $state(false);

  // Check if current accent color is a custom color (not in predefined list)
  let isCustomColor = $derived(!colors.some((c) => c.color === selectedColor));
  let isPreviousColorCustom = $derived(!colors.some((c) => c.color === previousColor));

  function handleColorChange(color: string) {
    if (color !== 'custom') {
      selectedColor = color;
      onColorChange?.(color);
    }
  }

  function handleCustomColorApply(color: string) {
    selectedColor = color;
    onColorChange?.(color);
  }
</script>

<div bind:this={ref} class={cn('flex flex-col gap-4', className)} {...restProps}>
  <RadioGroup.Root
    class="flex flex-wrap gap-3"
    value={isCustomColor ? 'custom' : selectedColor}
    onValueChange={handleColorChange}
    {disabled}>
    {#each colors as accent (accent.color)}
      <Item color={accent.color} label={accent.label} isSelected={selectedColor === accent.color} {disabled} />
    {/each}

    {#if isCustomColor || isPreviousColorCustom}
      <Item color={isCustomColor ? selectedColor : previousColor} label="Custom" isSelected={isCustomColor} {disabled} />
    {/if}

    <Item
      color="custom"
      label="Custom"
      isSelected={false}
      isCustomTrigger={true}
      {disabled}
      onCustomClick={() => {
        if (!disabled) {
          showCustomColorDialog = true;
        }
      }} />
  </RadioGroup.Root>

  <CustomDialog bind:open={showCustomColorDialog} onApply={handleCustomColorApply} />
</div>
