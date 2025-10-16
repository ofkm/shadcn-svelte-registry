---
title: Accent Color Picker
description: A beautiful color picker component for selecting accent colors with custom color support.
isNew: true
links:
  source: https://github.com/ofkm/shadcn-registry/tree/main/src/lib/registry/ui/accent-color-picker
---

<script>
  import ComponentPreview from "$lib/components/component-preview.svelte";
  import InstallTabs from "$lib/components/install-tabs.svelte";
  import CliCommand from "$lib/components/cli-command.svelte";
  import Steps from "$lib/components/steps.svelte";
  import Step from "$lib/components/step.svelte";
  import { Button } from "$lib/components/ui/button";
</script>

# Accent Color Picker

A beautiful color picker component for selecting accent colors with custom color support.

<div class="mt-4 flex flex-wrap gap-2">
  <Button href="https://github.com/ofkm/shadcn-registry/tree/main/src/lib/registry/ui/accent-color-picker" variant="outline" size="sm" target="_blank" rel="noopener">
    View Source
  </Button>
</div>

<ComponentPreview name="accent-color-picker-demo" />

## About

The Accent Color Picker component provides an intuitive way to select accent colors for your application. It includes a set of predefined colors and supports custom color input with live validation.

## Installation

<InstallTabs>
{#snippet cli()}

<CliCommand command="npx shadcn-svelte@latest add https://ofkm-shadcn-registry.pages.dev/r/accent-color-picker.json" />

{/snippet}
{#snippet manual()}

<Steps>
<Step>

Copy and paste the component source files into your project:

```
src/lib/components/ui/accent-color-picker/
  ├── accent-color-picker.svelte
  ├── accent-color-item.svelte
  ├── accent-color-custom-dialog.svelte
  └── index.ts
```

</Step>
</Steps>

{/snippet}
</InstallTabs>

## Usage

```svelte
<script lang="ts">
  import { AccentColorPicker } from "$lib/components/ui/accent-color-picker";

  let selectedColor = $state('oklch(0.65 0.25 240)');
</script>

<AccentColorPicker.Root bind:selectedColor>
  <AccentColorPicker.Item color="oklch(0.65 0.25 240)" />
  <AccentColorPicker.Item color="oklch(0.65 0.25 180)" />
  <AccentColorPicker.CustomDialog />
</AccentColorPicker.Root>
```

## Props

### Root

| Prop            | Type                      | Default        | Description                                         |
| --------------- | ------------------------- | -------------- | --------------------------------------------------- |
| `ref`           | `HTMLDivElement`          | -              | The underlying DOM element (bindable)               |
| `selectedColor` | `string`                  | -              | Currently selected color in oklch format (bindable) |
| `previousColor` | `string`                  | -              | Previous color for comparison                       |
| `colors`        | `AccentColor[]`           | Default colors | Array of color options                              |
| `disabled`      | `boolean`                 | `false`        | Disables the picker                                 |
| `onColorChange` | `(color: string) => void` | -              | Callback when color changes                         |
| `class`         | `string`                  | -              | Additional CSS classes                              |

## Examples

### With Custom Colors

<ComponentPreview name="accent-color-picker-custom">

<div></div>

</ComponentPreview>

### With Callback

<ComponentPreview name="accent-color-picker-callback">

<div></div>

</ComponentPreview>
