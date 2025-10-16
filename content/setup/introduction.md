---
title: Introduction
description: A personal collection of custom shadcn-svelte components built with Bits UI and Tailwind CSS.
---

<script lang="ts">
  import { PMCommand } from "$lib/components/ui/pm-command/index.js";
  
  const registryUrl = 'https://shadcn.ofkm.dev/r/[component-name].json';
</script>

## OFKM Component Registry

This is my personal collection of custom components built on top of the shadcn-svelte ecosystem. These components solve specific needs I've encountered in my projects that aren't covered by the official library.

### What is this?

This registry contains custom components that follow the same patterns and principles as shadcn-svelte:

- Built with [Bits UI](https://www.bits-ui.com) primitives
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Copy-paste friendly code
- Fully customizable and accessible

### How to use

You can install components using the shadcn-svelte CLI by pointing to this registry. Replace `[component-name]` with the actual component (e.g., `accent-color-picker`):

<PMCommand command="execute" args={["shadcn-svelte@next", "add", registryUrl]} />

Or browse the components and copy the source code directly.

### Important Note

This is a personal component registry and is not affiliated with the official [shadcn/ui](https://ui.shadcn.com) or [shadcn-svelte](https://shadcn-svelte.com) projects.
