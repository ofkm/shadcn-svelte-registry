<script lang="ts">
  import { DemoTabs } from '$lib/components/demo-tabs/index.js';
  import { StatusBadge } from '$lib/registry/ui/status-badge/index.js';

  const variants = ['red', 'purple', 'green', 'blue', 'gray', 'amber', 'pink', 'indigo', 'cyan', 'lime', 'emerald', 'teal', 'sky', 'violet', 'fuchsia', 'rose', 'orange'] as const;

  const statusExamples = [
    { text: 'running', variant: 'green' },
    { text: 'stopped', variant: 'red' },
    { text: 'pending', variant: 'amber' },
    { text: 'in progress', variant: 'blue' },
    { text: 'completed', variant: 'emerald' },
    { text: 'error', variant: 'red' },
    { text: 'warning', variant: 'orange' },
    { text: 'paused', variant: 'purple' },
  ] as const;

  const code = `<script lang="ts">
  import { StatusBadge } from '$lib/components/ui/status-badge';
<\/script>

<!-- Auto-capitalization (default behavior) -->
<StatusBadge text="running" variant="green" />
<StatusBadge text="in progress" variant="blue" />
<StatusBadge text="stopped" variant="red" />

<!-- Disable auto-capitalization -->
<StatusBadge text="CRITICAL" variant="red" capitalize={false} />

<!-- Using slot content -->
<StatusBadge variant="amber">
  ⏳ Processing...
</StatusBadge>

<!-- Common status examples -->
<StatusBadge text="active" variant="green" />
<StatusBadge text="inactive" variant="gray" />
<StatusBadge text="pending" variant="amber" />
<StatusBadge text="error" variant="red" />`;
</script>

<DemoTabs {code}>
  <div class="space-y-8">
    <!-- Auto-capitalization demo -->
    <div>
      <h3 class="text-lg font-semibold mb-4">Auto-capitalization</h3>
      <div class="flex flex-wrap gap-2">
        {#each statusExamples as status}
          <StatusBadge text={status.text} variant={status.variant} />
        {/each}
      </div>
      <p class="text-sm text-muted-foreground mt-2">Text is automatically capitalized (e.g., "in progress" becomes "In progress")</p>
    </div>

    <!-- All variants -->
    <div>
      <h3 class="text-lg font-semibold mb-4">All Variants</h3>
      <div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-x-2 gap-y-4">
        {#each variants as variant}
          <StatusBadge text={variant} {variant} />
        {/each}
      </div>
    </div>

    <!-- Capitalization control -->
    <div>
      <h3 class="text-lg font-semibold mb-4">Capitalization Control</h3>
      <div class="flex flex-wrap gap-4">
        <div class="space-y-2">
          <p class="text-sm font-medium">Auto-capitalize (default)</p>
          <div class="flex gap-2">
            <StatusBadge text="running" variant="green" />
            <StatusBadge text="in progress" variant="blue" />
          </div>
        </div>
        <div class="space-y-2">
          <p class="text-sm font-medium">No capitalization</p>
          <div class="flex gap-2">
            <StatusBadge text="running" variant="green" capitalize={false} />
            <StatusBadge text="in progress" variant="blue" capitalize={false} />
          </div>
        </div>
      </div>
    </div>

    <!-- Slot content -->
    <div>
      <h3 class="text-lg font-semibold mb-4">Custom Content</h3>
      <div class="flex flex-wrap gap-2">
        <StatusBadge variant="green">Verified</StatusBadge>
        <StatusBadge variant="red">❌ Failed</StatusBadge>
        <StatusBadge variant="amber">⏳ Processing...</StatusBadge>
        <StatusBadge variant="blue">🔄 Syncing</StatusBadge>
        <StatusBadge variant="purple">🔒 Private</StatusBadge>
      </div>
      <p class="text-sm text-muted-foreground mt-2">Use slot content for custom icons and formatting</p>
    </div>

    <!-- Real-world examples -->
    <div>
      <h3 class="text-lg font-semibold mb-4">Real-world Examples</h3>
      <div class="space-y-4">
        <div>
          <h4 class="text-sm font-medium mb-2">Docker Container Status</h4>
          <div class="flex flex-wrap gap-2">
            <StatusBadge text="running" variant="green" />
            <StatusBadge text="stopped" variant="gray" />
            <StatusBadge text="restarting" variant="blue" />
            <StatusBadge text="error" variant="red" />
          </div>
        </div>

        <div>
          <h4 class="text-sm font-medium mb-2">Task Management</h4>
          <div class="flex flex-wrap gap-2">
            <StatusBadge text="to do" variant="gray" />
            <StatusBadge text="in progress" variant="blue" />
            <StatusBadge text="review" variant="amber" />
            <StatusBadge text="completed" variant="green" />
          </div>
        </div>

        <div>
          <h4 class="text-sm font-medium mb-2">User Status</h4>
          <div class="flex flex-wrap gap-2">
            <StatusBadge text="online" variant="green" />
            <StatusBadge text="offline" variant="gray" />
            <StatusBadge text="away" variant="amber" />
            <StatusBadge text="busy" variant="red" />
          </div>
        </div>
      </div>
    </div>
  </div>
</DemoTabs>
