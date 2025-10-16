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

<div
	class={cn(
		'[counter-increment:step] before:bg-muted before:text-foreground relative pl-8 before:absolute before:left-0 before:top-0 before:flex before:h-6 before:w-6 before:items-center before:justify-center before:rounded-full before:text-xs before:font-medium before:content-[counter(step)]',
		className
	)}
>
	{@render children()}
</div>
