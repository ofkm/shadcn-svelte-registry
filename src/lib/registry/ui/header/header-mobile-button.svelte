<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
  import { cn } from '$lib/utils.js';
  import { Menu } from '@lucide/svelte';
  import { IsMobile } from '$lib/registry/hooks/is-mobile.svelte.js';
  import type { WithElementRef } from 'bits-ui';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  export type HeaderMobileButtonProps = WithElementRef<HTMLButtonAttributes> & {
    class?: string;
    onclick?: () => void;
    breakpoint?: number;
  };

  let { class: className, ref = $bindable(null), onclick, breakpoint = 768, ...restProps }: HeaderMobileButtonProps = $props();

  let buttonRef: HTMLButtonElement | null = $state(null);
  const isMobile = new IsMobile(breakpoint);

  $effect(() => {
    if (ref !== undefined) {
      ref = buttonRef;
    }
  });
</script>

{#if isMobile.current}
  <Button bind:ref={buttonRef} variant="ghost" size="sm" class={cn('flex', className)} {onclick} data-slot="header-mobile-button" {...restProps}>
    <Menu class="size-4" />
    <span class="sr-only">Toggle menu</span>
  </Button>
{/if}
