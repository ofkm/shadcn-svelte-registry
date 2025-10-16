<script lang="ts">
  import type { Component } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils';

  let {
    name,
    class: className,
    ...restProps
  }: HTMLAttributes<HTMLElement> & {
    name: string;
  } = $props();

  // Import the demo component dynamically
  const demos = import.meta.glob('$lib/components/demos/*.svelte', {
    eager: true,
  }) as Record<string, { default: Component }>;

  const demoKey = Object.keys(demos).find((key) => key.includes(`/${name}.svelte`));
  const DemoComponent = demoKey ? demos[demoKey].default : null;
</script>

<div class={cn('my-6 w-full', className)} {...restProps}>
  {#if DemoComponent}
    <DemoComponent />
  {:else}
    <div class="rounded-lg border border-destructive bg-destructive/10 p-4">
      <p class="text-sm text-destructive">
        Component <code class="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">{name}</code> not found.
      </p>
    </div>
  {/if}
</div>
