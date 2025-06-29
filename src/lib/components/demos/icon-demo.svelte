<script lang="ts">
  import type { Component } from 'svelte';
  import { DemoTabs } from '$lib/components/demo-tabs/index.js';

  type Props = {
    icon: Component;
    iconName: string;
    importPath: string;
  };

  let { icon, iconName, importPath }: Props = $props();

  const code = `<script lang="ts">
  import ${iconName} from '${importPath}';
<\/script>

<!-- Default size -->
<${iconName} />

<!-- Different sizes -->
<${iconName} class="size-4" />
<${iconName} class="size-6" />
<${iconName} class="size-8" />
<${iconName} class="size-12" />

<!-- With custom styling -->
<${iconName} class="size-8 text-foreground hover:text-muted-foreground transition-colors" />`;
</script>

<DemoTabs {code}>
  <div class="flex flex-col gap-6">
    <div class="flex items-center gap-4">
      <svelte:component this={icon} class="size-4" />
      <svelte:component this={icon} class="size-6" />
      <svelte:component this={icon} class="size-8" />
      <svelte:component this={icon} class="size-12" />
      <svelte:component this={icon} class="size-16" />
    </div>

    <div class="flex items-center gap-4">
      <svelte:component this={icon} class="size-8 text-foreground hover:text-muted-foreground transition-colors cursor-pointer" />
      <svelte:component this={icon} class="size-8 text-blue-500" />
      <svelte:component this={icon} class="size-8 text-green-500" />
      <svelte:component this={icon} class="size-8 text-red-500" />
    </div>
  </div>
</DemoTabs>
