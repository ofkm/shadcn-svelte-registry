<script lang="ts">
  import { DemoTabs } from '$lib/components/demo-tabs/index.js';
  import { IsMobile } from '$lib/registry/hooks/is-mobile.svelte.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Smartphone, Monitor } from '@lucide/svelte';

  const code = `<script lang="ts">
  import { IsMobile } from '$lib/hooks/is-mobile.svelte';

  // Default breakpoint (768px)
  const isMobile = new IsMobile();

  // Custom breakpoint (1024px)
  const isTablet = new IsMobile(1024);
<\/script>

<!-- Reactive display based on screen size -->
{#if isMobile.current}
  <div class="mobile-layout">
    <h2>Mobile View</h2>
    <p>Screen width is less than 768px</p>
  </div>
{:else}
  <div class="desktop-layout">
    <h2>Desktop View</h2>
    <p>Screen width is 768px or greater</p>
  </div>
{/if}

<!-- Use in reactive statements -->
{@const deviceType = isMobile.current ? 'mobile' : 'desktop'}
<Badge variant={isMobile.current ? 'secondary' : 'default'}>
  {deviceType}
</Badge>`;

  // Create instances with different breakpoints
  const isMobile = new IsMobile(); // 768px default
  const isTablet = new IsMobile(1024); // 1024px breakpoint
  const isSmall = new IsMobile(640); // 640px breakpoint
</script>

<DemoTabs {code}>
  <div class="space-y-8">
    <!-- Live Demo -->
    <div>
      <h3 class="text-lg font-semibold mb-4">Live Detection</h3>
      <div class="grid gap-4 md:grid-cols-3">
        <div class="border rounded-lg p-4 text-center">
          <div class="flex items-center justify-center mb-2">
            {#if isSmall.current}
              <Smartphone class="size-8 text-blue-500" />
            {:else}
              <Monitor class="size-8 text-green-500" />
            {/if}
          </div>
          <h4 class="font-medium mb-1">Small Screen</h4>
          <p class="text-sm text-muted-foreground mb-2">&lt; 640px</p>
          <Badge variant={isSmall.current ? 'default' : 'outline'}>
            {isSmall.current ? 'Active' : 'Inactive'}
          </Badge>
        </div>

        <div class="border rounded-lg p-4 text-center">
          <div class="flex items-center justify-center mb-2">
            {#if isMobile.current}
              <Smartphone class="size-8 text-blue-500" />
            {:else}
              <Monitor class="size-8 text-green-500" />
            {/if}
          </div>
          <h4 class="font-medium mb-1">Mobile</h4>
          <p class="text-sm text-muted-foreground mb-2">&lt; 768px</p>
          <Badge variant={isMobile.current ? 'default' : 'outline'}>
            {isMobile.current ? 'Active' : 'Inactive'}
          </Badge>
        </div>

        <div class="border rounded-lg p-4 text-center">
          <div class="flex items-center justify-center mb-2">
            {#if isTablet.current}
              <Smartphone class="size-8 text-blue-500" />
            {:else}
              <Monitor class="size-8 text-green-500" />
            {/if}
          </div>
          <h4 class="font-medium mb-1">Tablet</h4>
          <p class="text-sm text-muted-foreground mb-2">&lt; 1024px</p>
          <Badge variant={isTablet.current ? 'default' : 'outline'}>
            {isTablet.current ? 'Active' : 'Inactive'}
          </Badge>
        </div>
      </div>

      <p class="text-sm text-muted-foreground mt-4">Resize your browser window to see the breakpoints update in real-time.</p>
    </div>

    <!-- Conditional Rendering Example -->
    <div>
      <h3 class="text-lg font-semibold mb-4">Conditional Rendering</h3>
      <div class="border rounded-lg p-6">
        {#if isMobile.current}
          <div class="text-center">
            <Smartphone class="size-12 mx-auto mb-3 text-blue-500" />
            <h4 class="text-lg font-semibold mb-2">Mobile Layout</h4>
            <p class="text-muted-foreground mb-4">This content is optimized for mobile screens</p>
            <Button class="w-full">Mobile Action</Button>
          </div>
        {:else}
          <div class="flex items-center gap-6">
            <Monitor class="size-16 text-green-500 flex-shrink-0" />
            <div class="flex-1">
              <h4 class="text-xl font-semibold mb-2">Desktop Layout</h4>
              <p class="text-muted-foreground mb-4">This content takes advantage of larger screen real estate with a horizontal layout</p>
              <div class="flex gap-2">
                <Button>Primary Action</Button>
                <Button variant="outline">Secondary Action</Button>
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>

    <!-- Usage Examples -->
    <div>
      <h3 class="text-lg font-semibold mb-4">Usage Examples</h3>
      <div class="space-y-4">
        <div class="border rounded-lg p-4">
          <h4 class="font-medium mb-2">Responsive Navigation</h4>
          <div class="flex items-center justify-between">
            <span class="font-medium">Brand</span>
            {#if isMobile.current}
              <Button size="sm">☰</Button>
            {:else}
              <nav class="flex gap-4">
                <Button variant="ghost" size="sm">Home</Button>
                <Button variant="ghost" size="sm">About</Button>
                <Button variant="ghost" size="sm">Contact</Button>
              </nav>
            {/if}
          </div>
        </div>

        <div class="border rounded-lg p-4">
          <h4 class="font-medium mb-2">Adaptive Grid</h4>
          <div class="grid gap-2 {isMobile.current ? 'grid-cols-1' : 'grid-cols-4'}">
            {#each Array(4) as _, i}
              <div class="bg-muted rounded p-3 text-center text-sm">
                Item {i + 1}
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</DemoTabs>
