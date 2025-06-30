<script lang="ts">
  import { cn } from '$lib/utils.js';

  let { class: className, ...restProps }: { class?: string } = $props();
</script>

<span class={cn('inline-flex items-center rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-white', className)} {...restProps}> New </span>
