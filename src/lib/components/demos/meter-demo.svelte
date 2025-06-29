<script lang="ts">
  import { DemoTabs } from '$lib/components/demo-tabs/index.js';
  import Meter from '$lib/registry/ui/meter/meter.svelte';

  let value = $state(65);

  const code = `<script lang="ts">
  import Meter from '$lib/registry/ui/meter/meter.svelte';

  let value = $state(65);
<\/script>

<div class="space-y-4 max-w-md w-full">
  <div class="space-y-2">
    <label for="meter-value">Progress: {value}%</label>
    <input id="meter-value" type="range" min="0" max="100" bind:value class="w-full" />
  </div>

  <Meter {value} max={100} class="w-full" />

  <div class="grid grid-cols-3 gap-4">
    <Meter value={25} max={100} />
    <Meter value={50} max={100} />
    <Meter value={75} max={100} />
  </div>
</div>`;
</script>

<DemoTabs {code}>
  <div class="space-y-4 max-w-md w-full">
    <div class="space-y-2">
      <label for="meter-value">Progress: {value}%</label>
      <input id="meter-value" type="range" min="0" max="100" bind:value class="w-full" />
    </div>

    <Meter {value} max={100} class="w-full" />

    <div class="grid grid-cols-3 gap-4">
      <Meter variant="success" value={25} max={100} />
      <Meter variant="warning" value={50} max={100} />
      <Meter variant="destructive" value={75} max={100} />
    </div>
  </div>
</DemoTabs>
