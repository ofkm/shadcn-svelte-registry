<script lang="ts">
  import { DemoTabs } from '$lib/components/demo-tabs/index.js';
  import StatusBadge from '$lib/registry/ui/status-badge/status-badge.svelte';

  const variants = ['red', 'purple', 'green', 'blue', 'gray', 'amber', 'pink', 'indigo', 'cyan', 'lime', 'emerald', 'teal', 'sky', 'violet', 'fuchsia', 'rose', 'orange'] as const;

  const code = `<script lang="ts">
  import StatusBadge from '$lib/components/ui/status-badge/status-badge.svelte';
<\/script>

<StatusBadge text="Active" variant="green" />
<StatusBadge text="Inactive" variant="red" />
<StatusBadge text="Pending" variant="amber" />
<StatusBadge text="Success" variant="blue" />
<StatusBadge text="Warning" variant="orange" />`;
</script>

<DemoTabs {code}>
  <div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-x-2 gap-y-4 place-content-center">
    {#each variants as variant}
      <StatusBadge text={variant} {variant} />
    {/each}
  </div>
</DemoTabs>
