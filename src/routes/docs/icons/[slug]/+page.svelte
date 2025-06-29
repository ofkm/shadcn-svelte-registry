<script lang="ts">
  import { error } from '@sveltejs/kit';
  import { PMCommand } from '$lib/components/ui/pm-command';
  import { getIconByName } from '$lib/config/icons.js';
  import IconDemo from '$lib/components/demos/icon-demo.svelte';

  const { data } = $props();

  const slug = $derived(data.slug);
  const iconConfig = $derived(getIconByName(slug));

  const installCommand = $derived({
    command: 'execute' as const,
    args: [`shadcn-svelte add https://shadcn.ofkm.dev/r/${slug}.json`],
  });

  $effect(() => {
    if (!iconConfig) {
      error(404, 'Icon not found');
    }
  });
</script>

<svelte:head>
  <title>{iconConfig?.title} - Icons</title>
</svelte:head>

{#if iconConfig}
  <div class="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-8">
    <header class="flex flex-col gap-1">
      <h1 class="text-3xl font-bold tracking-tight">{iconConfig.title}</h1>
      <p class="text-muted-foreground">{iconConfig.description}</p>
    </header>

    <main class="flex flex-1 flex-col gap-8">
      <section class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold tracking-tight">Installation</h2>
        <div class="flex w-full flex-col gap-4">
          <PMCommand command={installCommand.command} args={installCommand.args} />
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold tracking-tight">Usage</h2>
        <IconDemo icon={iconConfig.component} iconName={iconConfig.title.replace(' ', '')} importPath={iconConfig.importPath} />
      </section>
    </main>
  </div>
{/if}
