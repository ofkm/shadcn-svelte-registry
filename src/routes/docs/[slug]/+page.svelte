<script lang="ts">
  import { error } from '@sveltejs/kit';
  import { PMCommand } from '$lib/components/ui/pm-command';
  import DropdownButtonDemo from '$lib/components/demos/dropdown-button-demo.svelte';
  import StatusBadgeDemo from '$lib/components/demos/status-badge-demo.svelte';
  import MeterDemo from '$lib/components/demos/meter-demo.svelte';
  import ContentWrapper from '$lib/components/content-wrapper.svelte';

  const { data } = $props();

  const components = {
    'dropdown-button': {
      title: 'Dropdown Button',
      description: 'A customizable dropdown button component',
      component: DropdownButtonDemo,
    },
    'status-badge': {
      title: 'Status Badge',
      description: "Status badges mirrored off GitHub's design",
      component: StatusBadgeDemo,
    },
    meter: {
      title: 'Meter',
      description: 'A meter component similar to bits-ui meter',
      component: MeterDemo,
    },
  };

  type ComponentKey = keyof typeof components;
  const slug = $derived(data.slug) as ComponentKey;
  const componentData = $derived(components[slug]);

  const installCommand = $derived({
    command: 'execute' as const,
    args: [`shadcn-svelte add https://shadcn.ofkm.dev/r/${slug}.json`],
  });

  $effect(() => {
    if (!componentData) {
      error(404, 'Component not found');
    }
  });
</script>

<svelte:head>
  <title>{componentData.title} - Components</title>
</svelte:head>
<ContentWrapper>
  <div class="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-8">
    <header class="flex flex-col gap-1">
      <h1 class="text-3xl font-bold tracking-tight">{componentData.title}</h1>
      <p class="text-muted-foreground">{componentData.description}</p>
    </header>

    <main class="flex flex-1 flex-col gap-8">
      <section class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold tracking-tight">Installation</h2>
        <div class="flex w-full flex-col gap-4">
          <PMCommand command={installCommand.command} args={installCommand.args} />
        </div>
      </section>

      <!-- Component Demo Section -->
      <section class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold tracking-tight">Usage</h2>
        <svelte:component this={componentData.component} />
      </section>
    </main>
  </div>
</ContentWrapper>
