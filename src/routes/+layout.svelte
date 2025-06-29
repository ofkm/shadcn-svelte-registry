<script lang="ts">
  import '../app.css';
  import { ModeWatcher } from 'mode-watcher';
  import Header from '$lib/components/header.svelte';

  let { children } = $props();
</script>

<ModeWatcher />

<svelte:head>
  <title>ofkm-shadcn-svelte</title>
  <meta name="description" content="ofkm-shadcn-svelte registry" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="bg-background text-foreground flex flex-col min-h-screen">
  <Header />
  <main class="flex-1">
    {@render children?.()}
  </main>
</div>
