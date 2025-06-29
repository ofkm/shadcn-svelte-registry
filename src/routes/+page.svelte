<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import StatusBadge from '$lib/registry/ui/status-badge/status-badge.svelte';
  import { DropdownButton } from '$lib/registry/ui/dropdown-button/index.js';
  import Meter from '$lib/registry/ui/meter/meter.svelte';
  import { ArrowRight } from '@lucide/svelte';

  // Demo options for dropdown button
  const options = [
    { label: 'Save as Draft', value: 'draft', onclick: () => {} },
    { label: 'Save and Publish', value: 'publish', onclick: () => {} },
    { label: 'Save Template', value: 'template', onclick: () => {} },
  ];
</script>

<svelte:head>
  <title>OFKM shadcn Registry - Custom Components</title>
  <meta name="description" content="Custom components for shadcn-svelte. Copy, paste, and own your code." />
</svelte:head>

<section class="relative overflow-hidden bg-background py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <Badge variant="secondary" class="mb-4">Component Registry</Badge>
      <h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Custom Components</h1>
      <p class="mt-6 text-lg leading-8 text-muted-foreground">100% fully compatible with shadcn-svelte. Copy, paste, and own your code.</p>
      <p class="mt-2 text-sm text-muted-foreground">Props to the shadcn-svelte team for making such a great library.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <Button href="/docs" class="group">
          Get Started
          <ArrowRight class="ml-2 size-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button variant="outline" href="https://github.com/ofkm/shadcn-registry">GitHub</Button>
      </div>
    </div>
  </div>
</section>

<section class="py-24 sm:py-32 bg-muted/30">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Preview</h2>
    </div>

    <div class="mt-16 flex flex-col items-center justify-center space-y-8">
      <div class="rounded-lg border bg-background p-8 shadow-sm">
        <div class="flex flex-col items-center space-y-6">
          <div class="flex flex-wrap items-center justify-center gap-4">
            <DropdownButton mainButtonText="Actions" {options} variant="default" />

            <div class="flex gap-2">
              <StatusBadge text="Active" variant="green" />
              <StatusBadge text="Pending" variant="amber" />
              <StatusBadge text="Error" variant="red" />
            </div>
          </div>

          <div class="w-full max-w-sm space-y-3">
            <Meter value={75} max={100} />
            <Meter value={45} max={100} />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
