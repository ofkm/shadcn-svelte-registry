<script lang="ts">
  import { page } from '$app/stores';
  import { findNeighbors } from '$lib/navigation';
  import { Button } from '$lib/components/ui/button';
  import { ArrowLeft, ArrowRight } from '@lucide/svelte';

  let { data } = $props();

  const Markdown = $derived(data.component);
  const doc = $derived(data.metadata);
  const neighbors = $derived(findNeighbors($page.url.pathname));
</script>

<svelte:head>
  <title>{doc.title} - OFKM Registry</title>
  <meta name="description" content={doc.description} />
</svelte:head>

<div class="mx-auto flex w-full min-w-0 max-w-2xl flex-1 flex-col gap-8 px-4 py-6 md:px-0 lg:py-8">
  <div class="prose prose-neutral dark:prose-invert max-w-none">
    <Markdown />
  </div>

  <!-- Previous/Next Navigation -->
  {#if neighbors.previous || neighbors.next}
    <div class="mt-8 flex items-center justify-between border-t pt-8">
      {#if neighbors.previous}
        <Button href={neighbors.previous.href} variant="ghost" class="gap-2">
          <ArrowLeft class="size-4" />
          <span class="hidden sm:inline">{neighbors.previous.title}</span>
          <span class="sm:hidden">Previous</span>
        </Button>
      {:else}
        <div></div>
      {/if}

      {#if neighbors.next}
        <Button href={neighbors.next.href} variant="ghost" class="gap-2">
          <span class="hidden sm:inline">{neighbors.next.title}</span>
          <span class="sm:hidden">Next</span>
          <ArrowRight class="size-4" />
        </Button>
      {/if}
    </div>
  {/if}
</div>
