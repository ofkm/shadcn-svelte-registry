<script lang="ts">
  import * as DropdownButton from '$lib/registry/ui/dropdown-button/index.js';
  import { DemoTabs } from '$lib/components/demo-tabs/index.js';

  const code = `<script lang="ts">
import * as DropdownButton from '$lib/registry/ui/dropdown-button/index.js';

function handleMainSave() {
  console.log('Main save clicked');
}
<\/script>

<DropdownButton.DropdownRoot>
  <DropdownButton.Root variant="outline" align="end">
    <DropdownButton.Main onclick={handleMainSave}>
      Actions
    </DropdownButton.Main>

    <DropdownButton.DropdownTrigger>
      {#snippet child({ props })}
        <DropdownButton.Trigger {...props} />
      {/snippet}
    </DropdownButton.DropdownTrigger>
  </DropdownButton.Root>

  <DropdownButton.Content>
    <DropdownButton.Item onclick={() => console.log('Draft saved')}>
      Save as Draft
    </DropdownButton.Item>
    <DropdownButton.Item onclick={() => console.log('Published')}>
      Save and Publish
    </DropdownButton.Item>
    <DropdownButton.Separator />
    <DropdownButton.Item onclick={() => console.log('Template saved')}>
      Save Template
    </DropdownButton.Item>
  </DropdownButton.Content>
</DropdownButton.DropdownRoot>`;

  function handleMainSave() {
    console.log('Main save clicked');
  }
</script>

<DemoTabs {code}>
  <div class="space-y-4 items-center">
    <DropdownButton.DropdownRoot>
      <DropdownButton.Root variant="outline" align="end">
        <DropdownButton.Main onclick={handleMainSave}>Actions</DropdownButton.Main>

        <DropdownButton.DropdownTrigger>
          {#snippet child({ props })}
            <DropdownButton.Trigger {...props} />
          {/snippet}
        </DropdownButton.DropdownTrigger>
      </DropdownButton.Root>

      <DropdownButton.Content>
        <DropdownButton.Item onclick={() => console.log('Draft saved')}>Save as Draft</DropdownButton.Item>
        <DropdownButton.Item onclick={() => console.log('Published')}>Save and Publish</DropdownButton.Item>
        <DropdownButton.Separator />
        <DropdownButton.Item onclick={() => console.log('Template saved')}>Save Template</DropdownButton.Item>
      </DropdownButton.Content>
    </DropdownButton.DropdownRoot>
  </div>
</DemoTabs>
