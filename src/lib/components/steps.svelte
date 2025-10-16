<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	let {
		children,
		class: className
	}: {
		children: Snippet;
		class?: string;
	} = $props();
</script>

<div class={cn('my-6 ml-6 list-decimal [&>div]:mt-6 [counter-reset:step]', className)}>
	{@render children()}
</div>
