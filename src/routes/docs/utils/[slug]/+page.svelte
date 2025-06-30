<script lang="ts">
  import { error } from '@sveltejs/kit';
  import { PMCommand } from '$lib/components/ui/pm-command';
  import { getUtilByName } from '$lib/config/utils.js';
  import PropDefinition from '$lib/components/prop-defintion.svelte';
  import NewBadge from '$lib/components/ui/new-badge.svelte';

  const { data } = $props();

  const slug = $derived(data.slug);
  const utilConfig = $derived(getUtilByName(slug));

  const installCommand = $derived({
    command: 'execute' as const,
    args: [`shadcn-svelte add https://shadcn.ofkm.dev/r/${slug}.json`],
  });

  $effect(() => {
    if (!utilConfig) {
      error(404, 'Utility not found');
    }
  });
</script>

<svelte:head>
  <title>{utilConfig?.title} - Utils</title>
  <meta name="description" content={utilConfig?.description} />
</svelte:head>

{#if utilConfig}
  {@const Component = utilConfig.component}
  <div class="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4">
    <header class="flex flex-col gap-1">
      <div class="flex items-center gap-3">
        <h1 class="text-3xl font-bold tracking-tight">{utilConfig.title}</h1>
        {#if utilConfig.new}
          <NewBadge />
        {/if}
      </div>
      <p class="text-muted-foreground">{utilConfig.description}</p>
    </header>

    <main class="flex flex-1 flex-col gap-8">
      <section class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold tracking-tight">Installation</h2>
        <div class="flex w-full flex-col gap-4">
          <PMCommand command={installCommand.command} args={installCommand.args} />
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold tracking-tight">Example</h2>
        <Component />
      </section>

      <!-- Functions -->
      {#if utilConfig.functions && utilConfig.functions.length > 0}
        <section class="flex flex-col gap-4">
          <h2 class="text-2xl font-semibold tracking-tight">Functions</h2>
          <div class="space-y-6">
            {#each utilConfig.functions as func}
              <div class="rounded-lg border p-6">
                <h3 class="text-lg font-semibold mb-2">{func.name}</h3>
                <p class="text-muted-foreground mb-4">{func.description}</p>

                <div class="space-y-3">
                  <div>
                    <h4 class="text-sm font-medium mb-1">Signature:</h4>
                    <code class="text-sm bg-muted px-2 py-1 rounded">{func.signature}</code>
                  </div>

                  <div>
                    <h4 class="text-sm font-medium mb-1">Returns:</h4>
                    <code class="text-sm bg-muted px-2 py-1 rounded">{func.returns}</code>
                  </div>

                  {#if func.example}
                    <div>
                      <h4 class="text-sm font-medium mb-1">Example:</h4>
                      <code class="text-sm bg-muted px-2 py-1 rounded block">{func.example}</code>
                    </div>
                  {/if}
                </div>
              </div>
            {/each}
          </div>
        </section>
      {/if}

      <!-- Props/Parameters -->
      {#if utilConfig.props && utilConfig.props.length > 0}
        <section class="flex flex-col gap-4">
          <h2 class="text-2xl font-semibold tracking-tight">API Reference</h2>
          <PropDefinition props={utilConfig.props} />
        </section>
      {/if}
    </main>
  </div>
{/if}
