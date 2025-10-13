<script lang="ts" module>
  import type { WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  export type AccentColorCustomDialogProps = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    open?: boolean;
    onApply: (color: string) => void;
  };
</script>

<script lang="ts">
  import { Dialog } from 'bits-ui';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import { browser } from '$app/environment';

  let { open = $bindable(false), onApply }: AccentColorCustomDialogProps = $props();

  let customColorInput = $state('');

  // Validate color in real-time
  let isValidColorState = $derived(browser && customColorInput ? isValidColor(customColorInput) : false);

  function applyCustomColor() {
    if (!isValidColorState) return;
    onApply(customColorInput);
    open = false;
    customColorInput = '';
  }

  function isValidColor(color: string): boolean {
    if (!browser) return false;
    // Create a temporary element to test if the color is valid
    const testElement = document.createElement('div');
    testElement.style.color = color;
    return testElement.style.color !== '';
  }

  function handleOpenChange(newOpen: boolean) {
    if (!newOpen) {
      customColorInput = '';
    }
    open = newOpen;
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    applyCustomColor();
  }
</script>

<Dialog.Root {open} onOpenChange={handleOpenChange}>
  <Dialog.Portal>
    <Dialog.Overlay
      class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
    <Dialog.Content
      class="fixed left-1/2 top-1/2 z-50 grid w-full max-w-md -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
      <div class="flex flex-col space-y-1.5 text-center sm:text-left">
        <Dialog.Title class="text-lg font-semibold leading-none tracking-tight">Custom Accent Color</Dialog.Title>
        <Dialog.Description class="text-sm text-muted-foreground">
          Enter a custom color value in any valid CSS format (hex, rgb, oklch, etc.)
        </Dialog.Description>
      </div>

      <form onsubmit={handleSubmit}>
        <div class="space-y-4">
          <div>
            <label for="custom-color-input" class="text-sm font-medium block mb-1"> Color Value </label>
            <div class="flex items-center gap-2">
              <div class="w-full transition">
                <Input
                  id="custom-color-input"
                  bind:value={customColorInput}
                  placeholder="#3b82f6 or oklch(0.6 0.2 240)"
                  class="flex-1" />
              </div>
              <div
                class="border-border rounded-lg border transition-all duration-200 ease-in-out {isValidColorState ? 'h-9 w-9' : (
                  'h-0 w-0'
                )}"
                style="background-color: {customColorInput}">
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6">
          <Button type="button" variant="secondary" onclick={() => handleOpenChange(false)}>Cancel</Button>
          <Button type="submit" disabled={!customColorInput || !isValidColorState}>Apply</Button>
        </div>
      </form>

      <Dialog.Close
        class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-4">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
        <span class="sr-only">Close</span>
      </Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
