---
title: Components
description: Browse all available custom components in the registry.
---

<script>
  import { components } from '$content';
  
  // Filter out the index page itself
  const componentList = components.filter(c => c.slug !== 'components');
</script>

## Available Components

Explore the collection of custom components built on top of shadcn-svelte. Each component follows the same patterns and principles, using Bits UI primitives and Tailwind CSS styling.

<div class="grid gap-4 mt-8">
  {#each componentList as component}
    <a 
      href="/docs/{component.slug}" 
      class="block p-4 rounded-lg border hover:border-primary transition-colors"
    >
      <div class="flex items-center gap-2">
        <h3 class="font-semibold">{component.title}</h3>
        {#if component.new}
          <span class="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">New</span>
        {/if}
      </div>
      <p class="text-sm text-muted-foreground mt-1">{component.description}</p>
    </a>
  {/each}
</div>

### How to Install

You can install any component using the shadcn-svelte CLI:

```bash
npx shadcn-svelte@latest add https://ofkm-shadcn-registry.pages.dev/r/[component-name].json
```

Or browse the individual component pages for detailed documentation, examples, and manual installation instructions.
