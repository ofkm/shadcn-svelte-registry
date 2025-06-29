<script lang="ts">
  import * as Code from '$lib/components/ui/code';
  import * as Tabs from '$lib/components/ui/tabs/index.js';

  let {
    code,
    children,
    class: className = '',
  }: {
    code: string;
    children: any;
    class?: string;
  } = $props();
</script>

<Tabs.Root value="preview" class="w-full {className}">
  <!-- Tab Headers - Outside the container -->
  <div class="flex items-center justify-start mb-4">
    <Tabs.List class="grid w-fit grid-cols-2 bg-transparent p-0 gap-1">
      <Tabs.Trigger value="preview" class="rounded-md px-4 py-2 text-sm font-medium transition-all data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=inactive]:text-muted-foreground hover:text-foreground">
        Preview
      </Tabs.Trigger>
      <Tabs.Trigger value="code" class="rounded-md px-4 py-2 text-sm font-medium transition-all data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=inactive]:text-muted-foreground hover:text-foreground">
        Code
      </Tabs.Trigger>
    </Tabs.List>
  </div>

  <!-- Content Area -->
  <Tabs.Content value="preview" class="mt-0">
    <div class="relative overflow-hidden rounded-lg border bg-background">
      <div class="flex min-h-[400px] items-center justify-center p-8">
        {@render children()}
      </div>
    </div>
  </Tabs.Content>

  <Tabs.Content value="code" class="mt-0">
    <div class="relative overflow-hidden rounded-lg border bg-card">
      <Code.Overflow>
        <Code.Root lang="svelte" class="overflow-auto rounded-lg border-0 bg-card" {code}></Code.Root>
      </Code.Overflow>
    </div>
  </Tabs.Content>
</Tabs.Root>
