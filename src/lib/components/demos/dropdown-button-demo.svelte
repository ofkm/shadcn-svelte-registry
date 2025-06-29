<script lang="ts">
  import { DropdownButton } from '$lib/registry/ui/dropdown-button/index.js';
  import { DemoTabs } from '$lib/components/demo-tabs/index.js';

  const code = `<script lang="ts">
import { DropdownButton } from '$lib/registry/ui/dropdown-button/index.js';

const options = [
  { 
    label: 'Save as Draft', 
    value: 'draft',
    onclick: () => console.log('Draft saved')
  },
  { 
    label: 'Save and Publish', 
    value: 'publish',
    onclick: () => console.log('Published')
  },
  {
    label: 'Save Template',
    value: 'template',
    onclick: () => console.log('Template saved')
  }
];

function handleMainSave() {
  console.log('Main save clicked');
}
<\/script>

// Simple usage
<DropdownButton 
  mainButtonText="Save" 
  {options} 
  onMainButtonClick={handleMainSave} 
  variant="default" 
/>

// Outline variant
<DropdownButton 
  mainButtonText="Actions" 
  {options} 
  variant="outline" 
/>`;

  const options = [
    {
      label: 'Save as Draft',
      value: 'draft',
      onclick: () => console.log('Draft saved'),
    },
    {
      label: 'Save and Publish',
      value: 'publish',
      onclick: () => console.log('Published'),
    },
    {
      label: 'Save Template',
      value: 'template',
      onclick: () => console.log('Template saved'),
    },
  ];

  function handleMainSave() {
    console.log('Main save clicked');
  }
</script>

<DemoTabs {code}>
  <div class="space-y-4">
    <DropdownButton mainButtonText="Save" {options} onMainButtonClick={handleMainSave} variant="default" />
    <DropdownButton mainButtonText="Actions" {options} variant="outline" />
  </div>
</DemoTabs>
