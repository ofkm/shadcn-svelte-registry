<script lang="ts" module>
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  export type CollapsibleCardProps = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    // Simple mode props
    title?: string;
    subtitle?: string;
    defaultOpen?: boolean;
    disabled?: boolean;
    // Composable mode
    simple?: boolean;
  };
</script>

<script lang="ts">
  import { Collapsible } from 'bits-ui';
  import Trigger from './collapsible-card-trigger.svelte';
  import Content from './collapsible-card-content.svelte';
  import Header from './collapsible-card-header.svelte';
  import Body from './collapsible-card-body.svelte';

  let {
    class: className,
    ref = $bindable(null),
    children,
    // Simple mode props
    title,
    subtitle,
    defaultOpen = false,
    disabled = false,
    simple = false,
    ...restProps
  }: CollapsibleCardProps = $props();

  // Determine if we're in simple mode
  const isSimpleMode = $derived(simple || title);
</script>

{#if isSimpleMode && title}
  <!-- Simple Mode: All-in-one component -->
  <Collapsible.Root open={defaultOpen} {disabled}>
    <div bind:this={ref} data-slot="collapsible-card" class={cn('border border-border rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden', className)} {...restProps}>
      <Collapsible.Trigger>
        {#snippet child({ props })}
          <Header {...props}>
            <div class="flex-1">
              <h3 class="font-medium text-sm">{title}</h3>
              {#if subtitle}
                <p class="text-muted-foreground text-xs">{subtitle}</p>
              {/if}
            </div>
          </Header>
        {/snippet}
      </Collapsible.Trigger>

      <Content>
        <Body>
          {@render children?.()}
        </Body>
      </Content>
    </div>
  </Collapsible.Root>
{:else}
  <!-- Composable Mode: Just the wrapper div -->
  <div bind:this={ref} data-slot="collapsible-card" class={cn('border border-border rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden', className)} {...restProps}>
    {@render children?.()}
  </div>
{/if}
