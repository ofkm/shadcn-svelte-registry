<script lang="ts">
  import { Search, Github } from "@lucide/svelte";
  import { onMount } from "svelte";
  import "../app.css";

  let { children } = $props();

  let searchOpen = $state(false);
  let darkMode = $state(true);

  onMount(() => {
    darkMode = true;
    document.documentElement.classList.add("dark");
  });
</script>

<svelte:head>
  <title>OFKM - shadcn-svelte Registry</title>
</svelte:head>

<div
  class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800"
>
  <!-- Background Effects -->
  <div
    class="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-purple-100/20 dark:from-blue-900/10 dark:to-purple-900/10"
  ></div>
  <div
    class="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%239C92AC%22%20fill-opacity=%220.02%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"
  ></div>

  <!-- Header -->
  <header
    class="sticky top-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-xl dark:bg-black/80"
  >
    <div class="flex h-16 items-center justify-between px-4 lg:px-8">
      <div class="flex items-center gap-4">
        <a href="/" class="flex items-center gap-3">
          <div class="h-8 w-8 flex items-center justify-center">
            <img src="/klogo-bare.png" alt="OFKM Logo" class="h-8 w-8" />
          </div>
          <div class="hidden sm:flex sm:flex-col sm:justify-center">
            <h1 class="font-bold text-lg leading-tight">OFKM</h1>
            <p class="text-xs text-gray-600 dark:text-gray-400 leading-tight">
              shadcn-svelte registry
            </p>
          </div>
        </a>
      </div>

      <div class="flex items-center gap-4">
        <!-- External Links -->
        <a
          href="https://github.com/ofkm/shadcn-svelte-registry"
          class="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github class="h-5 w-5" />
        </a>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="relative">
    {@render children()}
  </main>
</div>

<style>
  :global(html.dark) {
    color-scheme: dark;
  }
</style>
