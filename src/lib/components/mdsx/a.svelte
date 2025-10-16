<script lang="ts">
	import { cn } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	let { class: className, children, ...restProps }: HTMLAttributes<HTMLAnchorElement> = $props();
</script>

<a class={cn("font-medium underline underline-offset-4", className)} {...restProps}>
	{@render children?.()}
</a>
