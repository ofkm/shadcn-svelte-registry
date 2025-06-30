<script lang="ts">
  import MobileNav from './mobile-nav.svelte';
  import GithubLink from './github-link.svelte';
  import ModeSwitcher from './modeswitcher.svelte';
</script>

<header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mb-10">
  <div class="flex h-[70px] w-full items-center pl-4 pr-2">
    <div class="flex pl-5">
      <a href="/" class="mr-6 flex items-center space-x-2">
        <div class="flex size-6 items-center justify-center rounded bg-foreground">
          <span class="text-xs font-bold text-background">K</span>
        </div>
        <span class="hidden font-bold sm:inline-block">ofkm-shadcn-svelte</span>
      </a>
    </div>

    <MobileNav class="mr-2 flex md:hidden" />

    <div class="flex-1"></div>

    <nav class="flex items-center pr-5">
      <GithubLink />
      <ModeSwitcher />
    </nav>
  </div>
</header>
