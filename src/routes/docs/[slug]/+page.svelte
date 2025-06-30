<script lang="ts">
  import { error } from '@sveltejs/kit';
  import { PMCommand } from '$lib/components/ui/pm-command';
  import { getComponentByName } from '$lib/config/components.js';
  import ContentWrapper from '$lib/components/content-wrapper.svelte';
  import ApiReference from '$lib/components/prop-defintion.svelte';

  const { data } = $props();

  const slug = $derived(data.slug);
  const componentConfig = $derived(getComponentByName(slug));

  const installCommand = $derived({
    command: 'execute' as const,
    args: [`shadcn-svelte add https://shadcn.ofkm.dev/r/${slug}.json`],
  });

  $effect(() => {
    if (!componentConfig) {
      error(404, 'Component not found');
    }
  });
</script>

<svelte:head>
  <title>{componentConfig?.title} - Components</title>
</svelte:head>

{#if componentConfig}
  {@const Component = componentConfig.component}
  <ContentWrapper>
    <div class="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4">
      <header class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold tracking-tight">{componentConfig.title}</h1>
        <p class="text-muted-foreground">{componentConfig.description}</p>
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
          <Component />
        </section>

        {#if componentConfig.props && componentConfig.props.length > 0}
          <section class="flex flex-col gap-4">
            <ApiReference props={componentConfig.props} />
          </section>
        {/if}
      </main>
    </div>
  </ContentWrapper>
{/if}
