<script lang="ts" module>
  import { cn } from '$lib/utils.js';
  import { Collapsible } from 'bits-ui';

  export type CollapsibleCardContentProps = Collapsible.ContentProps & {
    duration?: number;
  };
</script>

<script lang="ts">
  import { slide } from 'svelte/transition';

  let { ref = $bindable(null), class: className, duration = 200, children, ...restProps }: CollapsibleCardContentProps = $props();
</script>

<Collapsible.Content forceMount bind:ref {...restProps}>
  {#snippet child({ props, open })}
    {#if open}
      <div {...props} class={cn('border-t border-border overflow-hidden', className)} transition:slide={{ duration, axis: 'y' }}>
        <div class="min-w-0">
          {@render children?.()}
        </div>
      </div>
    {/if}
  {/snippet}
</Collapsible.Content>
