<script lang="ts">
  import { Badge } from '$lib/components/ui/badge/index.js';
  import * as Tooltip from '$lib/components/ui/tooltip/index.js';
  import { cn } from '$lib/utils.js';

  export type PropDefinition = {
    name: string;
    type: string;
    default?: string;
    required?: boolean;
    bindable?: boolean;
    description: string;
    readonly?: boolean;
  };

  let {
    title = 'Prop Definitions',
    props = [],
    class: className,
  }: {
    title?: string;
    props: PropDefinition[];
    class?: string;
  } = $props();
</script>

<div class={cn('space-y-4', className)}>
  <h3 class="text-2xl font-semibold tracking-tight">{title}</h3>

  {#if props.length > 0}
    <div class="overflow-hidden rounded-lg border border-border bg-neutral-950">
      <table class="w-full">
        <thead class="border-b border-neutral-800 bg-neutral-900/50">
          <tr>
            <th class="px-4 py-3 text-left text-sm font-medium text-neutral-300">Prop</th>
            <th class="px-4 py-3 text-left text-sm font-medium text-neutral-300">Type</th>
            <th class="px-4 py-3 text-left text-sm font-medium text-neutral-300">Default</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-neutral-800">
          <Tooltip.Provider delayDuration={300}>
            {#each props as prop}
              <tr class="hover:bg-neutral-900/30">
                <td class="px-4 py-3">
                  <div class="flex items-center gap-2">
                    <Tooltip.Root>
                      <Tooltip.Trigger>
                        <code class="rounded bg-orange-900/30 px-2 py-1 text-sm font-mono text-orange-300 cursor-help hover:bg-orange-900/40 transition-colors">
                          {prop.name}{#if prop.required}<span class="text-red-400">*</span>{/if}
                        </code>
                      </Tooltip.Trigger>
                      <Tooltip.Content class="max-w-xs">
                        <p class="text-xs">{prop.description}</p>
                      </Tooltip.Content>
                    </Tooltip.Root>

                    <div class="flex items-center gap-1">
                      {#if prop.bindable}
                        <Badge class="bg-blue-600 hover:bg-blue-600 text-white text-xs px-2 py-0.5">$bindable</Badge>
                      {/if}
                      {#if prop.readonly}
                        <Badge variant="outline" class="text-xs px-2 py-0.5">readonly</Badge>
                      {/if}
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <code class="text-sm font-mono text-neutral-300">{prop.type}</code>
                </td>
                <td class="px-4 py-3">
                  <code class="text-sm font-mono text-neutral-400">
                    {#if prop.default}
                      {prop.default}
                    {:else}
                      —
                    {/if}
                  </code>
                </td>
              </tr>
            {/each}
          </Tooltip.Provider>
        </tbody>
      </table>
    </div>
  {:else}
    <p class="text-muted-foreground">No props to display.</p>
  {/if}
</div>
