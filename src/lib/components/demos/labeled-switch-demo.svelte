<script lang="ts">
  import { DemoTabs } from '$lib/components/demo-tabs/index.js';
  import { LabeledSwitch } from '$lib/registry/ui/labeled-switch';

  let marketingEmails = $state(false);
  let securityEmails = $state(true);
  let analyticsDisabled = $state(false);

  const code = `<script lang="ts">
  import { LabeledSwitch } from '$lib/registry/ui/labeled-switch';

  let marketingEmails = $state(false);
  let securityEmails = $state(true);
<\/script>

<!-- Basic usage -->
<LabeledSwitch
  bind:checked={marketingEmails}
  label="Marketing emails"
  description="Receive emails about new products, features, and more."
/>

<!-- Required switch -->
<LabeledSwitch
  bind:checked={securityEmails}
  label="Security emails"
  description="Receive emails about your account security."
/>

<!-- Disabled switch -->
<LabeledSwitch
  bind:checked={analyticsDisabled}
  label="Analytics"
  description="Help us improve our service."
  disabled
/>`;
</script>

<DemoTabs {code}>
  <div class="space-y-6">
    <LabeledSwitch bind:checked={marketingEmails} label="Marketing emails" description="Receive emails about new products, features, and more." />

    <LabeledSwitch bind:checked={securityEmails} label="Security emails" description="Receive emails about your account security." />

    <LabeledSwitch bind:checked={analyticsDisabled} label="Analytics" description="Help us improve our service." disabled />

    <LabeledSwitch bind:checked={marketingEmails} label="Simple switch" />
  </div>
</DemoTabs>
