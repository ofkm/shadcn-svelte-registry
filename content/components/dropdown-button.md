---
title: Dropdown Button
description: A customizable dropdown button component with split button functionality.
isNew: false
links:
  source: https://github.com/ofkm/shadcn-registry/tree/main/src/lib/registry/ui/dropdown-button
---

<script>
  import ComponentPreview from "$lib/components/component-preview.svelte";
  import InstallTabs from "$lib/components/install-tabs.svelte";
  import CliCommand from "$lib/components/cli-command.svelte";
  import Steps from "$lib/components/steps.svelte";
  import Step from "$lib/components/step.svelte";
</script>

<ComponentPreview name="dropdown-button-demo" />

## About

The Dropdown Button component combines a primary action button with a dropdown menu of additional actions. It's perfect for situations where you need to provide multiple related actions while keeping the primary action prominent.

## Installation

<InstallTabs>
{#snippet cli()}

<CliCommand command="npx shadcn-svelte@latest add https://ofkm-shadcn-registry.pages.dev/r/dropdown-button.json" />

{/snippet}
{#snippet manual()}

<Steps>
<Step>

Copy and paste the component source files into your project:

```
src/lib/components/ui/dropdown-button/
  ├── dropdown-button.svelte
  ├── dropdown-button-main.svelte
  ├── dropdown-button-trigger.svelte
  └── index.ts
```

</Step>
</Steps>

{/snippet}
</InstallTabs>

## Usage

```svelte
<script lang="ts">
  import { DropdownButton } from "$lib/components/ui/dropdown-button";
</script>

<DropdownButton.Root>
  <DropdownButton.Main onclick={() => console.log('Primary action')}>
    Primary Action
  </DropdownButton.Main>
  <DropdownButton.Trigger />
  <DropdownButton.Content>
    <DropdownButton.Item>Action 1</DropdownButton.Item>
    <DropdownButton.Item>Action 2</DropdownButton.Item>
  </DropdownButton.Content>
</DropdownButton.Root>
```

## Props

### Root

| Prop       | Type                           | Default     | Description                           |
| ---------- | ------------------------------ | ----------- | ------------------------------------- |
| `ref`      | `HTMLDivElement`               | -           | The underlying DOM element (bindable) |
| `variant`  | `ButtonVariant`                | `"default"` | Default variant for buttons           |
| `size`     | `ButtonSize`                   | `"default"` | Default size for buttons              |
| `align`    | `"start" \| "center" \| "end"` | `"end"`     | Alignment of dropdown content         |
| `disabled` | `boolean`                      | `false`     | Disables both buttons                 |
| `class`    | `string`                       | -           | Additional CSS classes                |

### Main

| Prop      | Type                      | Default | Description                         |
| --------- | ------------------------- | ------- | ----------------------------------- |
| `variant` | `ButtonVariant`           | -       | Button variant (inherits from Root) |
| `size`    | `ButtonSize`              | -       | Button size (inherits from Root)    |
| `onclick` | `(e: MouseEvent) => void` | -       | Click handler                       |

### Trigger

| Prop      | Type            | Default | Description                         |
| --------- | --------------- | ------- | ----------------------------------- |
| `variant` | `ButtonVariant` | -       | Button variant (inherits from Root) |
| `size`    | `ButtonSize`    | -       | Button size (inherits from Root)    |

## Examples

### With Different Variants

<ComponentPreview name="dropdown-button-variants">

<div></div>

</ComponentPreview>

### With Icons

<ComponentPreview name="dropdown-button-icons">

<div></div>

</ComponentPreview>
