<script lang="ts">
  import { Snippet } from '$lib/components/ui/snippet';

  let { command }: { command: string } = $props();
</script>

<div class="my-6">
  <Snippet text={command} class="rounded-lg" />
</div>
