<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import StatusBadge from '$lib/registry/ui/status-badge/status-badge.svelte';
  import { DropdownButton } from '$lib/registry/ui/dropdown-button/index.js';
  import { CollapsibleCard } from '$lib/registry/ui/collapsible-card/index.js';
  import LabeledSwitch from '$lib/registry/ui/labeled-switch/labeled-switch.svelte';
  import Meter from '$lib/registry/ui/meter/meter.svelte';
  import { ArrowRight, Github } from '@lucide/svelte';

  const options = [
    { label: 'Save as Draft', value: 'draft', onclick: () => {} },
    { label: 'Save and Publish', value: 'publish', onclick: () => {} },
    { label: 'Save Template', value: 'template', onclick: () => {} },
  ];

  let switchValue = $state(true);
</script>

<svelte:head>
  <title>OFKM Component Registry - Custom shadcn-svelte Components</title>
  <meta name="description" content="A personal collection of custom shadcn-svelte components. Copy, paste, and own your code." />
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-background py-20 sm:py-32">
  <div class="mx-auto max-w-7xl px-4 lg:px-8">
    <div class="mx-auto max-w-3xl text-center">
      <Badge variant="secondary" class="mb-6">Personal Component Registry</Badge>
      <h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">Custom Svelte Components</h1>
      <p class="mt-6 text-xl leading-8 text-muted-foreground max-w-2xl mx-auto">A personal collection of shadcn-svelte components. Built with Svelte 5, Tailwind CSS, Bits UI Primitives, and shadcn-svelte.</p>
      <p class="mt-3 text-sm text-muted-foreground">Not affiliated with official shadcn projects • Props to the shadcn-svelte team</p>

      <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button href="/docs" size="lg" class="group w-full sm:w-auto text-foreground">
          Get Started
          <ArrowRight class="ml-2 size-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button variant="outline" size="lg" href="https://github.com/ofkm/shadcn-svelte-registry" class="w-full sm:w-auto">
          <Github class="mr-2 size-4" />
          GitHub
        </Button>
      </div>
    </div>
  </div>
</section>

<!-- Component Preview Section -->
<section class="py-20 sm:py-32 bg-muted/30">
  <div class="mx-auto max-w-7xl px-4 lg:px-8">
    <div class="mx-auto max-w-2xl text-center mb-16">
      <h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Component Showcase</h2>
      <p class="mt-4 text-lg text-muted-foreground">Interactive examples of the custom components in this registry.</p>
    </div>

    <div class="mx-auto max-w-4xl">
      <div class="grid gap-8 md:grid-cols-2">
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Collapsible Card</h3>
          <CollapsibleCard title="Account Settings" subtitle="Manage your preferences" simple defaultOpen={true}>
            <div class="space-y-3">
              <LabeledSwitch bind:checked={switchValue} label="Enable notifications" description="Get notified about important updates" />
              <div>
                <label for="email-input" class="text-sm font-medium block mb-1">Email</label>
                <input id="email-input" type="email" class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="john@example.com" />
              </div>
            </div>
          </CollapsibleCard>
        </div>

        <!-- Other Components Preview -->
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold mb-4">Dropdown Button</h3>
            <DropdownButton mainButtonText="Actions" {options} variant="default" />
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">Status Badges</h3>
            <div class="flex flex-wrap gap-2">
              <StatusBadge text="Active" variant="green" />
              <StatusBadge text="Pending" variant="amber" />
              <StatusBadge text="Error" variant="red" />
              <StatusBadge text="Draft" variant="gray" />
            </div>
          </div>

          <div>
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
<section class="py-20 sm:py-32 bg-background">
  <div class="mx-auto max-w-7xl px-4 lg:px-8">
    <div class="mx-auto max-w-4xl">
      <div class="grid gap-8 md:grid-cols-3">
        <div class="text-center">
          <div class="mx-auto size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <svg class="size-6 text-primary" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Copy & Paste</h3>
          <p class="text-muted-foreground text-sm">No package installations. Copy the code and own it completely.</p>
        </div>

        <div class="text-center">
          <div class="mx-auto size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <svg class="size-6 text-primary" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M9.75 3.104L19.8 14.5m0 0l-5.25 5.25a2.25 2.25 0 01-3.182 0M19.8 14.5l-5.25 5.25" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Built with Bits UI</h3>
          <p class="text-muted-foreground text-sm">Leverages the same primitives as shadcn-svelte for accessibility.</p>
        </div>

        <div class="text-center">
          <div class="mx-auto size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <svg class="size-6 text-primary" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Fully Customizable</h3>
          <p class="text-muted-foreground text-sm">Styled with Tailwind CSS. Modify everything to match your design.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-muted/30">
  <div class="mx-auto max-w-7xl px-4 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Ready to get started?</h2>
      <p class="mt-4 text-lg text-muted-foreground">Browse the components or copy them directly from the docs.</p>
      <div class="mt-8">
        <Button href="/docs" size="lg" class="group">
          Browse Components
          <ArrowRight class="ml-2 size-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  </div>
</section>
