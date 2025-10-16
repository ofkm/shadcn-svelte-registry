<script lang="ts">
	import { cn } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	let { class: className, children, ...restProps }: HTMLAttributes<HTMLHeadingElement> = $props();
</script>

<h3
	class={cn("mt-8 scroll-m-20 text-2xl font-semibold tracking-tight", className)}
	{...restProps}
>
	{@render children?.()}
</h3>
