<script lang="ts">
  import { DemoTabs } from '$lib/components/demo-tabs/index.js';
  import { AccentColorPicker } from '$lib/registry/ui/accent-color-picker/index.js';

  let selectedColor = $state('oklch(0.606 0.25 292.717)');
  let previousColor = $state('');

  function handleColorChange(color: string) {
    previousColor = selectedColor;
    selectedColor = color;
    console.log('Selected color:', color);
  }

  const code = `<script lang="ts">
  import { AccentColorPicker } from '$lib/components/ui/accent-color-picker/index.js';

  let selectedColor = $state('oklch(0.606 0.25 292.717)');
  let previousColor = $state('');

  function handleColorChange(color: string) {
    previousColor = selectedColor;
    selectedColor = color;
    console.log('Selected color:', color);
  }
<\/script>

<AccentColorPicker 
  bind:selectedColor
  {previousColor}
  onColorChange={handleColorChange}
/>

<!-- Display current color -->
<div class="flex items-center gap-3">
  <div 
    class="size-12 rounded-md border-2 border-border shadow-sm"
    style="background-color: {selectedColor}"
  ></div>
  <code class="text-sm">{selectedColor}</code>
</div>`;
</script>

<DemoTabs {code}>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-2">
      <h3 class="text-lg font-semibold">Select Accent Color</h3>
      <p class="text-sm text-muted-foreground">Choose from predefined colors or create your own custom accent color.</p>
    </div>

    <AccentColorPicker bind:selectedColor {previousColor} onColorChange={handleColorChange} />

    <div class="flex flex-col gap-2 rounded-lg border p-4">
      <div class="text-sm font-medium">Current Selection:</div>
      <div class="flex items-center gap-3">
        <div class="size-12 rounded-md border-2 border-border shadow-sm" style="background-color: {selectedColor}"></div>
        <code class="text-sm text-muted-foreground">{selectedColor}</code>
      </div>
    </div>

    <div class="flex flex-col gap-4 rounded-lg border p-4 bg-muted/30">
      <h4 class="text-sm font-semibold">Preview</h4>
      <div class="flex flex-wrap gap-2">
        <button
          class="rounded-md px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
          style="background-color: {selectedColor}">
          Primary Button
        </button>
        <button
          class="rounded-md border-2 px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
          style="border-color: {selectedColor}; color: {selectedColor}">
          Outlined Button
        </button>
        <div class="flex items-center gap-2 rounded-md border px-3 py-2">
          <div class="size-2 rounded-full" style="background-color: {selectedColor}"></div>
          <span class="text-sm">Status Indicator</span>
        </div>
      </div>
    </div>
  </div>
</DemoTabs>
