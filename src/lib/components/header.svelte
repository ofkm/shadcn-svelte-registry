<script lang="ts">
  import MobileNav from './mobile-nav.svelte';
  import GithubLink from './github-link.svelte';
  import ModeSwitcher from './modeswitcher.svelte';
  import MainNav from './mainnav.svelte';
  import { mainNavItems } from '$lib/config/navigation.js';
</script>

<header class="sticky top-0 z-50 w-full">
  <!-- Layered depth background -->
  <div class="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background/95 backdrop-blur-md"></div>
  <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
  <div class="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-sm"></div>

  <!-- Shadow layers for depth -->
  <div class="absolute inset-0 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]"></div>
  <div class="absolute inset-0 shadow-[0_4px_16px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.15)]"></div>

  <!-- Content layer -->
  <div class="relative flex h-[70px] w-full items-center pl-4 pr-2">
    <div class="flex pl-5">
      <a href="/" class="mr-6 flex items-center space-x-2 transition-transform hover:scale-105">
        <div class="flex size-6 items-center justify-center rounded bg-gradient-to-br from-foreground to-foreground/90 shadow-sm">
          <span class="text-xs font-bold text-background">K</span>
        </div>
        <span class="hidden font-bold sm:inline-block bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
          >ofkm-shadcn-svelte</span>
      </a>
    </div>

    <MobileNav class="mr-2 flex md:hidden" />

    <MainNav items={mainNavItems} class="hidden md:flex ml-6" />

    <div class="flex-1"></div>

    <nav class="flex items-center pr-5 gap-2">
      <GithubLink />
      <ModeSwitcher />
    </nav>
  </div>
</header>
