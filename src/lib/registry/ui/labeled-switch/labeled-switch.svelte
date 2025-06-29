<script lang="ts">
  import { Switch, Label, useId, type WithoutChildrenOrChild } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    id = useId(),
    checked = $bindable(false),
    ref = $bindable(null),
    label,
    description,
    disabled = false,
    class: className,
    ...restProps
  }: WithoutChildrenOrChild<Switch.RootProps> & {
    label: string;
    description?: string;
    class?: string;
  } = $props();
</script>

<div class={cn('items-top flex space-x-2', className)}>
  <Switch.Root
    bind:checked
    bind:ref
    {id}
    {disabled}
    {...restProps}
    class="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
  >
    <Switch.Thumb class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
  </Switch.Root>
  <div class="grid gap-1.5 leading-none">
    <Label.Root for={id} class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      {label}
    </Label.Root>
    {#if description}
      <p class="text-[0.8rem] text-muted-foreground">
        {description}
      </p>
    {/if}
  </div>
</div>
