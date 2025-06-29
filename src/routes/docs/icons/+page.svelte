<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
  import { iconsConfig } from '$lib/config/icons.js';
</script>

<svelte:head>
  <title>Icons - Documentation</title>
</svelte:head>

<div class="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-8">
  <header class="flex flex-col gap-4">
    <h1 class="text-3xl font-bold tracking-tight">Icons</h1>
    <p class="text-muted-foreground">A collection of beautifully crafted SVG icons for your projects.</p>
  </header>

  <main class="flex flex-1 flex-col gap-8">
    {#if iconsConfig.length > 0}
      <section class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {#each iconsConfig as icon (icon.name)}
          <div class="group relative overflow-hidden rounded-lg border p-6 hover:shadow-md transition-shadow">
            <div class="flex items-center justify-center h-24 mb-4">
              <svelte:component this={icon.component} class="size-12" />
            </div>
            <h3 class="font-semibold mb-2">{icon.title}</h3>
            <p class="text-sm text-muted-foreground mb-4">{icon.description}</p>
            <Button href={icon.href} variant="outline" size="sm" class="w-full">View Details</Button>
          </div>
        {/each}
      </section>
    {:else}
      <div class="flex flex-col items-center justify-center py-12 text-center">
        <p class="text-muted-foreground">No icons available yet.</p>
      </div>
    {/if}
  </main>
</div>
