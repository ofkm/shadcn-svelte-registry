<script lang="ts">
  import { PMCommand } from '$lib/components/ui/pm-command';
  import * as Card from '$lib/registry/ui/card/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { ArrowRight, Terminal, Package, Zap } from '@lucide/svelte';

  const steps = [
    {
      title: 'Prerequisites',
      description: 'Make sure you have shadcn-svelte set up in your project',
      icon: Package,
    },
    {
      title: 'Install Component',
      description: 'Use the CLI to add any component to your project',
      icon: Terminal,
    },
    {
      title: 'Start Using',
      description: 'Import and use the component in your application',
      icon: Zap,
    },
  ];

  const examples = [
    {
      name: 'Dropdown Button',
      command: 'dropdown-button',
    },
    {
      name: 'Status Badge',
      command: 'status-badge',
    },
    {
      name: 'Meter',
      command: 'meter',
    },
  ];
</script>

<svelte:head>
  <title>Installation - OFKM shadcn-svelte Registry</title>
  <meta name="description" content="Learn how to install and set up custom shadcn-svelte components in your project." />
</svelte:head>

<div class="mx-auto max-w-4xl">
  <!-- Header -->
  <header class="mb-12">
    <Badge variant="secondary" class="mb-4">Installation</Badge>
    <h1 class="text-4xl font-bold tracking-tight text-foreground mb-4">Installation Guide</h1>
    <p class="text-xl text-muted-foreground leading-relaxed">Learn how to install and use custom components in your shadcn-svelte project.</p>
  </header>

  <!-- Installation Steps -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold tracking-tight mb-6">Getting Started</h2>
    <div class="grid gap-6 sm:grid-cols-3">
      {#each steps as step, index}
        <Card.Root>
          <Card.Header>
            <div class="flex items-center gap-3 mb-2">
              <div class="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                {index + 1}
              </div>
              <svelte:component this={step.icon} class="size-5 text-primary" />
            </div>
            <Card.Title class="text-lg">{step.title}</Card.Title>
            <Card.Description>{step.description}</Card.Description>
          </Card.Header>
        </Card.Root>
      {/each}
    </div>
  </section>

  <!-- Prerequisites -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold tracking-tight mb-6">Prerequisites</h2>
    <Card.Root>
      <Card.Header>
        <Card.Title>shadcn-svelte Setup</Card.Title>
        <Card.Description>Make sure you have shadcn-svelte installed and configured in your project.</Card.Description>
      </Card.Header>
      <Card.Content class="space-y-4">
        <p class="text-muted-foreground">If you haven't set up shadcn-svelte yet, follow the official installation guide:</p>
        <Button href="https://www.shadcn-svelte.com/docs/installation" target="_blank" variant="outline">
          shadcn-svelte Installation Guide
          <ArrowRight class="ml-2 size-4" />
        </Button>
      </Card.Content>
    </Card.Root>
  </section>

  <!-- Installation Commands -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold tracking-tight mb-6">Install Components</h2>
    <Card.Root>
      <Card.Header>
        <Card.Title>CLI Installation</Card.Title>
        <Card.Description>Use the shadcn-svelte CLI to install any component from this registry.</Card.Description>
      </Card.Header>
      <Card.Content class="space-y-4">
        <div class="space-y-2">
          <p class="text-sm font-medium">General command:</p>
          <PMCommand command="add" args={['https://shadcn.ofkm.dev/r/<component>.json']} />
        </div>

        <div class="space-y-3">
          <p class="text-sm font-medium">Examples:</p>
          {#each examples as example}
            <div class="space-y-1">
              <p class="text-sm text-muted-foreground">{example.name}:</p>
              <PMCommand command="add" args={[`https://shadcn.ofkm.dev/r/${example.command}.json`]} />
            </div>
          {/each}
        </div>
      </Card.Content>
    </Card.Root>
  </section>

  <!-- Usage -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold tracking-tight mb-6">Usage</h2>
    <Card.Root>
      <Card.Header>
        <Card.Title>Using Components</Card.Title>
        <Card.Description>After installation, components will be available in your project.</Card.Description>
      </Card.Header>
      <Card.Content class="space-y-4">
        <div class="space-y-3">
          <p class="text-sm font-medium">Components are installed to:</p>
          <div class="bg-muted rounded-lg p-3 font-mono text-sm">src/lib/components/ui/[component-name]/</div>
        </div>

        <div class="space-y-3">
          <p class="text-sm font-medium">Import and use in your Svelte files:</p>
          <div class="bg-muted rounded-lg p-4 font-mono text-sm">
            <div class="text-green-600">// Import the component</div>
            <div>import &#123; DropdownButton &#125; from '$lib/components/ui/dropdown-button';</div>
            <br />
            <div class="text-green-600">// Use in your template</div>
            <div>&lt;DropdownButton mainButtonText="Save" &#123;options&#125; /&gt;</div>
          </div>
        </div>
      </Card.Content>
    </Card.Root>
  </section>

  <!-- What Gets Installed -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold tracking-tight mb-6">What Gets Installed</h2>
    <Card.Root>
      <Card.Header>
        <Card.Title>Component Files</Card.Title>
        <Card.Description>Each component includes all necessary files and dependencies.</Card.Description>
      </Card.Header>
      <Card.Content>
        <ul class="space-y-2 text-muted-foreground">
          <li class="flex items-center gap-2">
            <div class="size-1.5 rounded-full bg-primary"></div>
            Component source code (TypeScript/Svelte)
          </li>
          <li class="flex items-center gap-2">
            <div class="size-1.5 rounded-full bg-primary"></div>
            TypeScript type definitions
          </li>
          <li class="flex items-center gap-2">
            <div class="size-1.5 rounded-full bg-primary"></div>
            Required dependencies (if any)
          </li>
          <li class="flex items-center gap-2">
            <div class="size-1.5 rounded-full bg-primary"></div>
            Index file for easy imports
          </li>
        </ul>
      </Card.Content>
    </Card.Root>
  </section>
</div>
