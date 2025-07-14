<script lang="ts">
  import { Snippet } from '$lib/components/ui/snippet';
</script>

<svelte:head>
  <title>Introduction - OFKM shadcn-svelte Registry</title>
  <meta name="description" content="A personal collection of shadcn-svelte components built with Bits UI and Tailwind CSS." />
</svelte:head>

<header class="mb-8">
  <h1 class="text-4xl font-bold tracking-tight mb-4">OFKM Component Registry</h1>
  <p class="text-xl text-muted-foreground">A personal collection of custom shadcn-svelte components</p>
</header>

<div class="max-w-none">
  <div class="rounded-lg border border-amber-200 bg-amber-50 p-4 mb-6 dark:border-amber-800 dark:bg-amber-950/50">
    <p class="text-sm text-amber-800 dark:text-amber-200">
      <strong>Note:</strong> This is a personal component registry and is not affiliated with the official
      <a href="https://ui.shadcn.com" class="underline hover:no-underline" target="_blank" rel="noopener noreferrer">shadcn/ui</a> or
      <a href="https://shadcn-svelte.com" class="underline hover:no-underline" target="_blank" rel="noopener noreferrer">shadcn-svelte</a> projects.
    </p>
  </div>

  <p class="leading-7 text-lg [&:not(:first-child)]:mt-6">
    This is my personal collection of custom components built on top of the shadcn-svelte ecosystem. These components solve specific needs I've encountered in my projects that aren't covered by the official library.
  </p>

  <h2 class="font-heading mt-8 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">What is this?</h2>
  <p class="leading-7 [&:not(:first-child)]:mt-6">This registry contains custom components that follow the same patterns and principles as shadcn-svelte:</p>

  <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
    <li>Built with <a href="https://www.bits-ui.com" class="underline hover:no-underline" target="_blank" rel="noopener noreferrer">Bits UI</a> primitives</li>
    <li>Styled with <a href="https://tailwindcss.com" class="underline hover:no-underline" target="_blank" rel="noopener noreferrer">Tailwind CSS</a></li>
    <li>Copy-paste friendly code</li>
    <li>Fully customizable and accessible</li>
  </ul>

  <h2 class="font-heading mt-8 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">How to use</h2>
  <p class="leading-7 [&:not(:first-child)]:mt-6">You can install components using the shadcn-svelte CLI by pointing to this registry:</p>

  <Snippet text="npx shadcn-svelte add https://shadcn.ofkm.dev/r/[component-name].json" class="w-full my-6  p-4" />

  <p class="leading-7 [&:not(:first-child)]:mt-6">Or browse the components in the sidebar to see examples and copy the code directly.</p>

  <p class="leading-7 [&:not(:first-child)]:mt-6">All components follow the same patterns you're familiar with from shadcn-svelte, so they'll feel natural to use in your projects.</p>
</div>
