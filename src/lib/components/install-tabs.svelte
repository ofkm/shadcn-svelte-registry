<script lang="ts">
	import type { Snippet } from 'svelte';
	import * as Tabs from '$lib/components/ui/tabs';

	let {
		cli,
		manual
	}: {
		cli: Snippet;
		manual: Snippet;
	} = $props();
</script>

<Tabs.Root value="cli" class="mt-6">
	<Tabs.List>
		<Tabs.Trigger value="cli">CLI</Tabs.Trigger>
		<Tabs.Trigger value="manual">Manual</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="cli">
		{@render cli?.()}
	</Tabs.Content>
	<Tabs.Content value="manual">
		{@render manual?.()}
	</Tabs.Content>
</Tabs.Root>
