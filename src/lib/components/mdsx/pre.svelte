<script lang="ts">
  import { onMount } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import * as Code from '$lib/components/ui/code/index.js';
  import { cn } from '$lib/utils.js';

  type SupportedLang = 'bash' | 'diff' | 'javascript' | 'json' | 'svelte' | 'typescript' | 'yaml';

  // Code.Root doesn't accept 'yaml', so narrow the type for what's passed to it
  type CodeLang = Exclude<SupportedLang, 'yaml'>;

  let {
    class: className,
    children,
    lang = 'bash',
    ...restProps
  }: HTMLAttributes<HTMLDivElement> & {
    lang?: SupportedLang;
  } = $props();

  let preNode = $state<HTMLDivElement>();
  let code = $state('');

  onMount(() => {
    if (preNode) {
      code = preNode.textContent?.trim() || '';
    }
  });

  // map yaml -> json (a supported lang), keep others as-is
  const codeLang: CodeLang = (lang === 'yaml' ? 'json' : lang) as CodeLang;
</script>

<div bind:this={preNode} style="display: none;">{@render children?.()}</div>

{#if code}
  <Code.Root lang={codeLang} class={cn('m-3 w-full max-w-none', className)} {...restProps} {code}>
    <Code.CopyButton size="sm" variant="ghost" />
  </Code.Root>
{/if}
