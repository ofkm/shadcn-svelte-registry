<script lang="ts">
  import { DemoTabs } from '$lib/components/demo-tabs/index.js';
  import { CollapsibleCard } from '$lib/registry/ui/collapsible-card';

  const code = `<script lang="ts">
    import { CollapsibleCard } from '$lib/components/ui/collapsible-card';
<\/script>

<CollapsibleCard title="Account Settings" subtitle="Manage your account preferences" simple defaultOpen={true}>
    <div class="space-y-4">
    <div>
        <label for="email" class="text-sm font-medium">Email</label>
        <input id="email" type="email" class="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="john@example.com" />
    </div>
    <div>
        <label for="name" class="text-sm font-medium">Name</label>
        <input id="name" type="text" class="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="John Doe" />
    </div>
    </div>
</CollapsibleCard>`;
</script>

<DemoTabs {code}>
  <div class="space-y-6 w-full max-w-xl">
    <CollapsibleCard title="Account Settings" subtitle="Manage your account preferences" simple defaultOpen={true}>
      <div class="space-y-4">
        <div>
          <label for="email" class="text-sm font-medium">Email</label>
          <input id="email" type="email" class="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="john@example.com" />
        </div>
        <div>
          <label for="name" class="text-sm font-medium">Name</label>
          <input id="name" type="text" class="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="John Doe" />
        </div>
      </div>
    </CollapsibleCard>
  </div>
</DemoTabs>
