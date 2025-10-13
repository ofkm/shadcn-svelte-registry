<script lang="ts">
  import { PMCommand } from '$lib/components/ui/pm-command';
  import { Button } from '$lib/components/ui/button/index.js';
  import * as Code from '$lib/components/ui/code';
  import { Snippet } from '$lib/components/ui/snippet';

  import { ArrowRight, ExternalLink } from '@lucide/svelte';

  const usageCode = `<script lang="ts">
  import { DropdownButton } from '$lib/components/ui/dropdown-button';
<\/script>

<DropdownButton mainButtonText="Save" {options} />`;
</script>

<svelte:head>
  <title>Installation - OFKM shadcn-svelte Registry</title>
  <meta name="description" content="Learn how to install and set up custom shadcn-svelte components in your project." />
</svelte:head>

<header class="mb-8 mt-10">
  <h1 class="text-4xl font-bold tracking-tight mb-4">Installation</h1>
  <p class="text-xl text-muted-foreground">Learn how to install and use custom components in your shadcn-svelte project.</p>
</header>

<div class="max-w-none space-y-8">
  <!-- Prerequisites -->
  <section>
    <h2 class="font-heading mt-8 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">Prerequisites</h2>
    <p class="leading-7 [&:not(:first-child)]:mt-6">Make sure you have shadcn-svelte installed and configured in your project.</p>

    <div class="my-6 rounded-lg border bg-card p-6">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="font-semibold">Need to set up shadcn-svelte?</h3>
          <p class="text-sm text-muted-foreground mt-1">Follow the official installation guide first</p>
        </div>
        <Button href="https://www.shadcn-svelte.com/docs/installation" target="_blank" variant="outline" size="sm">
          Setup Guide
          <ExternalLink class="ml-2 size-3" />
        </Button>
      </div>
    </div>
  </section>

  <!-- Installation -->
  <section>
    <h2 class="font-heading mt-8 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">Install Components</h2>
    <p class="leading-7 [&:not(:first-child)]:mt-6">Use the shadcn-svelte CLI to install any component from this registry:</p>

    <div class="my-6">
      <p class="text-sm font-medium mb-3">General command:</p>
      <PMCommand variant="secondary" command="execute" args={['shadcn-svelte add https://shadcn.ofkm.dev/r/[component-name].json']} />
    </div>
  </section>

  <!-- Usage -->
  <section>
    <h2 class="font-heading mt-8 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">Usage</h2>
    <p class="leading-7 [&:not(:first-child)]:mt-6">After installation, components will be available in your project at:</p>

    <Snippet text="src/lib/components/ui/[component-name]/" class="w-full my-6  p-4" />

    <p class="leading-7 [&:not(:first-child)]:mt-6">Import and use in your Svelte files:</p>

    <div class="my-6">
      <Code.Root lang="svelte" class="w-full" code={usageCode}>
        <Code.CopyButton />
      </Code.Root>
    </div>
  </section>

  <!-- What Gets Installed -->
  <section>
    <h2 class="font-heading mt-8 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">What Gets Installed</h2>
    <p class="leading-7 [&:not(:first-child)]:mt-6">Each component includes:</p>

    <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>Component source code (TypeScript/Svelte)</li>
      <li>TypeScript type definitions</li>
      <li>Required dependencies (if any)</li>
      <li>Index file for easy imports</li>
    </ul>
  </section>

  <!-- Manual Installation -->
  <section>
    <h2 class="font-heading mt-8 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">Manual Installation</h2>
    <p class="leading-7 [&:not(:first-child)]:mt-6">
      Prefer to copy and paste? Browse any component page to see the source code and copy it directly.
    </p>

    <div class="my-6">
      <Button href="/docs" variant="outline">
        Browse Components
        <ArrowRight class="ml-2 size-4" />
      </Button>
    </div>
  </section>
</div>
