<script lang="ts">
  import * as DropdownButton from "$lib/registry/ui/dropdown-button/index.js";
  import { Tabs } from "bits-ui";
  import { Loader2, Send } from "@lucide/svelte";
  import { onMount } from "svelte";
  import StatusBadge from "$lib/registry/ui/status-badge/status-badge.svelte";

  let saving = false;
  let selectedOption = $state("Option 1");
  let dropdownButtonHighlightedCode = $state("");
  let statusBadgeHighlightedCode = $state("");

  onMount(async () => {
    const { createHighlighter } = await import("shiki");
    const highlighter = await createHighlighter({
      themes: ["dark-plus"],
      langs: ["svelte"],
    });

    const statusBadgeCode = `<script lang="ts">
	import StatusBadge from '$lib/components/badges/status-badge.svelte';
<\/script>

<StatusBadge text="Remote" variant="blue" />`;

    const dropdownButtonCode = `<DropdownButton.DropdownRoot>
  <DropdownButton.Root>
    <DropdownButton.Main variant="outline" disabled={false}>
      {#if saving}
        <Loader2 class="size-4 mr-2 animate-spin" />
      {:else}
        <Send class="size-4 mr-2" />
      {/if}
      {selectedOption}
    </DropdownButton.Main>

    <DropdownButton.DropdownTrigger>
      <DropdownButton.Trigger variant="outline" disabled={saving} />
    </DropdownButton.DropdownTrigger>
  </DropdownButton.Root>

  <DropdownButton.Content align="end" class="min-w-[200px]">
    <DropdownButton.Item onclick={() => (selectedOption = "Option 1")}>
      Option 1
    </DropdownButton.Item>
    <DropdownButton.Item onclick={() => (selectedOption = "Option 2")}>
      Option 2
    </DropdownButton.Item>
    <DropdownButton.Item onclick={() => (selectedOption = "Option 3")}>
      Option 3
    </DropdownButton.Item>
  </DropdownButton.Content>
</DropdownButton.DropdownRoot>`;

    dropdownButtonHighlightedCode = highlighter.codeToHtml(dropdownButtonCode, {
      lang: "svelte",
      theme: "dark-plus",
    });

    statusBadgeHighlightedCode = highlighter.codeToHtml(statusBadgeCode, {
      lang: "svelte",
      theme: "dark-plus",
    });
  });
</script>

<div class="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-8">
  <header class="flex flex-col gap-1">
    <h1 class="text-3xl font-bold tracking-tight">Components</h1>
    <p class="text-muted-foreground">
      Custom shadcn-svelte components I have created for projects.
    </p>
  </header>
  <main class="flex flex-1 flex-col gap-8">
    <!-- Dropdown Button Component -->
    <div
      class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4"
    >
      <h2 class="text-muted-foreground text-sm sm:pl-3">
        Dropdown Menu Button
      </h2>

      <Tabs.Root value="preview" class="w-full">
        <Tabs.List
          class="rounded-[9px] bg-dark-10 shadow-mini-inset dark:bg-background grid w-full grid-cols-2 gap-1 p-1 text-sm font-semibold leading-[0.01em] dark:border dark:border-neutral-600/30"
        >
          <Tabs.Trigger
            value="preview"
            class="data-[state=active]:shadow-mini dark:data-[state=active]:bg-muted h-8 rounded-[7px] bg-transparent py-2 data-[state=active]:bg-white"
            >Preview</Tabs.Trigger
          >
          <Tabs.Trigger
            value="code"
            class="data-[state=active]:shadow-mini dark:data-[state=active]:bg-muted h-8 rounded-[7px] bg-transparent py-2 data-[state=active]:bg-white"
            >Code</Tabs.Trigger
          >
        </Tabs.List>
        <Tabs.Content
          value="preview"
          class="relative flex min-h-[400px] items-center justify-center mt-4"
        >
          <DropdownButton.DropdownRoot>
            <DropdownButton.Root>
              <DropdownButton.Main variant="outline" disabled={false}>
                {#if saving}
                  <Loader2 class="size-4 mr-2 animate-spin" />
                {:else}
                  <Send class="size-4 mr-2" />
                {/if}
                {selectedOption}
              </DropdownButton.Main>

              <DropdownButton.DropdownTrigger>
                <DropdownButton.Trigger variant="outline" disabled={saving} />
              </DropdownButton.DropdownTrigger>
            </DropdownButton.Root>

            <DropdownButton.Content align="end" class="min-w-[200px]">
              <DropdownButton.Item
                onclick={() => (selectedOption = "Option 1")}
              >
                Option 1
              </DropdownButton.Item>
              <DropdownButton.Item
                onclick={() => (selectedOption = "Option 2")}
              >
                Option 2
              </DropdownButton.Item>
              <DropdownButton.Item
                onclick={() => (selectedOption = "Option 3")}
              >
                Option 3
              </DropdownButton.Item>
            </DropdownButton.Content>
          </DropdownButton.DropdownRoot>
        </Tabs.Content>
        <Tabs.Content value="code" class="mt-4">
          <div
            class="[&>pre]:rounded-lg [&>pre]:border [&>pre]:text-xs [&>pre]:p-4"
          >
            {@html dropdownButtonHighlightedCode}
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>

    <!-- Status Badge Component -->
    <div
      class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4"
    >
      <h2 class="text-muted-foreground text-sm sm:pl-3">
        Status Badge - Mirrored off Github's design.
      </h2>

      <Tabs.Root value="preview" class="w-full">
        <Tabs.List
          class="rounded-[9px] bg-dark-10 shadow-mini-inset dark:bg-background grid w-full grid-cols-2 gap-1 p-1 text-sm font-semibold leading-[0.01em] dark:border dark:border-neutral-600/30"
        >
          <Tabs.Trigger
            value="preview"
            class="data-[state=active]:shadow-mini dark:data-[state=active]:bg-muted h-8 rounded-[7px] bg-transparent py-2 data-[state=active]:bg-white"
            >Preview</Tabs.Trigger
          >
          <Tabs.Trigger
            value="code"
            class="data-[state=active]:shadow-mini dark:data-[state=active]:bg-muted h-8 rounded-[7px] bg-transparent py-2 data-[state=active]:bg-white"
            >Code</Tabs.Trigger
          >
        </Tabs.List>
        <Tabs.Content
          value="preview"
          class="relative grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-x-2 gap-y-4 min-h-[400px] place-content-center mt-4 p-4"
        >
          <StatusBadge text="red" variant="red" />
          <StatusBadge text="purple" variant="purple" />
          <StatusBadge text="green" variant="green" />
          <StatusBadge text="blue" variant="blue" />
          <StatusBadge text="gray" variant="gray" />
          <StatusBadge text="amber" variant="amber" />
          <StatusBadge text="pink" variant="pink" />
          <StatusBadge text="indigo" variant="indigo" />
          <StatusBadge text="cyan" variant="cyan" />
          <StatusBadge text="lime" variant="lime" />
          <StatusBadge text="emerald" variant="emerald" />
          <StatusBadge text="teal" variant="teal" />
          <StatusBadge text="sky" variant="sky" />
          <StatusBadge text="violet" variant="violet" />
          <StatusBadge text="fuchsia" variant="fuchsia" />
          <StatusBadge text="rose" variant="rose" />
          <StatusBadge text="orange" variant="orange" />
        </Tabs.Content>
        <Tabs.Content value="code" class="mt-4">
          <div
            class="[&>pre]:rounded-lg [&>pre]:border [&>pre]:text-xs [&>pre]:p-4"
          >
            {@html statusBadgeHighlightedCode}
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  </main>
</div>
