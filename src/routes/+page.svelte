<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import StatusBadge from '$lib/registry/ui/status-badge/status-badge.svelte';
  import * as DropdownButton from '$lib/registry/ui/dropdown-button/index.js';
  import { CollapsibleCard } from '$lib/registry/ui/collapsible-card/index.js';
  import LabeledSwitch from '$lib/registry/ui/labeled-switch/labeled-switch.svelte';
  import Meter from '$lib/registry/ui/meter/meter.svelte';
  import { ArrowRight, Github, Copy, Layers, SlidersHorizontal } from '@lucide/svelte';

  let switchValue = $state(true);
</script>

<svelte:head>
  <title>OFKM Component Registry - Custom shadcn-svelte Components</title>
  <meta name="description" content="A personal collection of custom shadcn-svelte components. Copy, paste, and own your code." />
</svelte:head>

<section class="relative overflow-hidden bg-background py-20 sm:py-32">
  <div class="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background"></div>
  <div class="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-30"></div>
  <div
    class="absolute inset-0 opacity-[0.06] pointer-events-none [background-image:linear-gradient(to_right,theme(colors.border)/40_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)/40_1px,transparent_1px)] [background-size:48px_48px] [background-position:center]">
  </div>

  <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
  <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

  <div class="relative mx-auto max-w-7xl px-4 lg:px-8">
    <div
      class="relative mx-auto max-w-3xl text-center rounded-2xl border border-border/50 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/60 p-8 sm:p-10 shadow-xl">
      <Badge variant="secondary" class="mb-6 shadow-sm">Personal Component Registry</Badge>
      <h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl drop-shadow-sm">
        Custom Svelte Components
      </h1>
      <p class="mt-6 text-xl leading-8 text-muted-foreground max-w-2xl mx-auto">
        A personal collection of shadcn-svelte components. Built with Svelte 5, Tailwind CSS, Bits UI Primitives, and shadcn-svelte.
      </p>
      <p class="mt-3 text-sm text-muted-foreground">Not affiliated with official shadcn projects • Props to the shadcn-svelte team</p>

      <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button href="/docs" size="lg" class="group w-full sm:w-auto text-foreground shadow-lg hover:shadow-xl transition-all">
          Get Started
          <ArrowRight class="ml-2 size-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          href="https://github.com/ofkm/shadcn-svelte-registry"
          class="w-full sm:w-auto shadow-md hover:shadow-lg transition-all">
          <Github class="mr-2 size-4" />
          GitHub
        </Button>
      </div>
    </div>
  </div>
</section>

<section class="relative py-20 sm:py-32 bg-muted/30">
  <div class="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent"></div>

  <div class="relative mx-auto max-w-7xl px-4 lg:px-8">
    <div class="mx-auto max-w-2xl text-center mb-16">
      <h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl drop-shadow-sm">Component Showcase</h2>
      <div class="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <p class="mt-4 text-lg text-muted-foreground">Interactive examples of the custom components in this registry.</p>
    </div>

    <div class="mx-auto max-w-4xl">
      <div class="grid gap-8 md:grid-cols-2">
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Collapsible Card</h3>
          <div class="p-6 rounded-lg bg-card shadow-lg border border-border/50 transition-shadow hover:shadow-2xl">
            <CollapsibleCard title="Account Settings" subtitle="Manage your preferences" simple defaultOpen={true}>
              <div class="space-y-3">
                <LabeledSwitch
                  bind:checked={switchValue}
                  label="Enable notifications"
                  description="Get notified about important updates" />
                <div>
                  <label for="email-input" class="text-sm font-medium block mb-1">Email</label>
                  <input
                    id="email-input"
                    type="email"
                    class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:shadow-md transition-shadow"
                    placeholder="john@example.com" />
                </div>
              </div>
            </CollapsibleCard>
          </div>
        </div>

        <div class="space-y-6">
          <div class="p-6 rounded-lg bg-card shadow-lg border border-border/50">
            <h3 class="text-lg font-semibold mb-4">Dropdown Button</h3>
            <DropdownButton.DropdownRoot>
              <DropdownButton.Root variant="outline" align="end">
                <DropdownButton.Main onclick={() => console.log('Action clicked')}>Actions</DropdownButton.Main>

                <DropdownButton.DropdownTrigger>
                  {#snippet child({ props })}
                    <DropdownButton.Trigger {...props} />
                  {/snippet}
                </DropdownButton.DropdownTrigger>
              </DropdownButton.Root>

              <DropdownButton.Content>
                <DropdownButton.Item onclick={() => console.log('Draft')}>Save as Draft</DropdownButton.Item>
                <DropdownButton.Item onclick={() => console.log('Publish')}>Save and Publish</DropdownButton.Item>
                <DropdownButton.Separator />
                <DropdownButton.Item onclick={() => console.log('Template')}>Save Template</DropdownButton.Item>
              </DropdownButton.Content>
            </DropdownButton.DropdownRoot>
          </div>

          <div class="p-6 rounded-lg bg-card shadow-lg border border-border/50">
            <h3 class="text-lg font-semibold mb-4">Status Badges</h3>
            <div class="flex flex-wrap gap-2">
              <StatusBadge text="Active" variant="green" />
              <StatusBadge text="Pending" variant="amber" />
              <StatusBadge text="Error" variant="red" />
              <StatusBadge text="Draft" variant="gray" />
            </div>
          </div>

          <div class="p-6 rounded-lg bg-card shadow-lg border border-border/50">
            <h3 class="text-lg font-semibold mb-4">Progress Meter</h3>
            <div class="space-y-3">
              <Meter value={85} max={100} label="Storage Used" />
              <Meter value={42} max={100} label="CPU Usage" variant="warning" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Features Section -->
<section class="relative py-20 sm:py-32 bg-background">
  <!-- Subtle gradient overlay -->
  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent"></div>

  <div class="relative mx-auto max-w-7xl px-4 lg:px-8">
    <div class="mx-auto max-w-4xl">
      <div class="grid gap-8 md:grid-cols-3">
        <div
          class="text-center group rounded-xl border border-border/60 bg-card/60 backdrop-blur p-6 shadow-lg transition-all hover:shadow-xl">
          <div
            class="mx-auto size-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 shadow-md">
            <Copy class="size-6 text-primary" aria-hidden="true" />
          </div>
          <h3 class="text-lg font-semibold mb-2">Copy & Paste</h3>
          <p class="text-muted-foreground text-sm">No package installations. Copy the code and own it completely.</p>
        </div>

        <div
          class="text-center group rounded-xl border border-border/60 bg-card/60 backdrop-blur p-6 shadow-lg transition-all hover:shadow-xl">
          <div
            class="mx-auto size-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 shadow-md">
            <Layers class="size-6 text-primary" aria-hidden="true" />
          </div>
          <h3 class="text-lg font-semibold mb-2">Built with Bits UI</h3>
          <p class="text-muted-foreground text-sm">Leverages the same primitives as shadcn-svelte for accessibility.</p>
        </div>

        <div
          class="text-center group rounded-xl border border-border/60 bg-card/60 backdrop-blur p-6 shadow-lg transition-all hover:shadow-xl">
          <div
            class="mx-auto size-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 shadow-md">
            <SlidersHorizontal class="size-6 text-primary" aria-hidden="true" />
          </div>
          <h3 class="text-lg font-semibold mb-2">Fully Customizable</h3>
          <p class="text-muted-foreground text-sm">Styled with Tailwind CSS. Modify everything to match your design.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="relative py-16 bg-muted/30">
  <div class="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
  <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

  <div class="relative mx-auto max-w-7xl px-4 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-2xl font-bold tracking-tight text-foreground sm:text-3xl drop-shadow-sm">Ready to get started?</h2>
      <p class="mt-4 text-lg text-muted-foreground">Browse the components or copy them directly from the docs.</p>
      <div class="mt-8">
        <Button href="/docs" size="lg" class="group shadow-lg hover:shadow-xl transition-all">
          Browse Components
          <ArrowRight class="ml-2 size-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  </div>
</section>
