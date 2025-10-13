/*
	Installed from @ieedan/shadcn-svelte-extras
*/

import { Context } from 'runed';
import type { ReadableBoxedValues, WritableBoxedValues } from 'svelte-toolbelt';
import type { CodeRootProps } from './types';
import { highlighter } from './shiki';
import { browser } from '$app/environment';
import type { HighlighterCore } from 'shiki';

type CodeOverflowStateProps = WritableBoxedValues<{
  collapsed: boolean;
}>;

class CodeOverflowState {
  constructor(readonly opts: CodeOverflowStateProps) {
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  toggleCollapsed() {
    this.opts.collapsed.current = !this.opts.collapsed.current;
  }

  get collapsed() {
    return this.opts.collapsed.current;
  }
}

type CodeRootStateProps = ReadableBoxedValues<{
  code: string;
  lang: NonNullable<CodeRootProps['lang']>;
  hideLines: boolean;
  highlight: CodeRootProps['highlight'];
}>;

class CodeRootState {
  highlighter: HighlighterCore | null = $state(null);
  // sanitizer defaults to identity on SSR; replaced on client after dynamic import
  sanitizer: (html: string) => string = $state((html: string) => html);

  constructor(
    readonly opts: CodeRootStateProps,
    readonly overflow?: CodeOverflowState
  ) {
    highlighter.then((hl) => (this.highlighter = hl));
  }

  highlight(code: string) {
    return this.highlighter?.codeToHtml(code, {
      lang: this.opts.lang.current,
      themes: {
        light: 'github-light-default',
        dark: 'github-dark-default',
      },
      transformers: [
        {
          pre: (el) => {
            el.properties.style = '';

            if (!this.opts.hideLines.current) {
              el.properties.class += ' line-numbers';
            }

            return el;
          },
          line: (node, line) => {
            if (within(line, this.opts.highlight.current)) {
              node.properties.class = node.properties.class + ' line--highlighted';
            }

            return node;
          },
        },
      ],
    });
  }

  get code() {
    return this.opts.code.current;
  }

  // compute highlighted HTML and sanitize using the current sanitizer
  highlighted = $derived(this.sanitizer(this.highlight(this.code) ?? ''));
}

function within(num: number, range: CodeRootProps['highlight']) {
  if (!range) return false;

  let within = false;

  for (const r of range) {
    if (typeof r === 'number') {
      if (num === r) {
        within = true;
        break;
      }
      continue;
    }

    if (r[0] <= num && num <= r[1]) {
      within = true;
      break;
    }
  }

  return within;
}

class CodeCopyButtonState {
  constructor(readonly root: CodeRootState) {}

  get code() {
    return this.root.opts.code.current;
  }
}

const overflowCtx = new Context<CodeOverflowState>('code-overflow-state');

const ctx = new Context<CodeRootState>('code-root-state');

export function useCodeOverflow(props: CodeOverflowStateProps) {
  return overflowCtx.set(new CodeOverflowState(props));
}

export function useCode(props: CodeRootStateProps) {
  let overflow: CodeOverflowState | undefined = undefined;

  try {
    overflow = overflowCtx.get();
  } catch {
    // ignore
  }

  const state = new CodeRootState(props, overflow);

  // On the client, dynamically import DOMPurify to avoid SSR bundling issues
  if (browser) {
    // dynamic import ensures cssstyle/jsdom-like deps are never included in SSR bundle
    import('isomorphic-dompurify')
      .then((mod: any) => {
        const dp = mod?.default ?? mod;
        // Two common shapes: a ready instance with .sanitize, or a factory requiring window
        if (dp?.sanitize) {
          state.sanitizer = dp.sanitize.bind(dp);
        } else if (typeof dp === 'function') {
          try {
            const instance = dp(window as any);
            state.sanitizer = instance.sanitize.bind(instance);
          } catch {
            // ignore if window not available for some reason
          }
        }
      })
      .catch(() => {
        // keep identity sanitizer on failure
      });
  }

  return ctx.set(state);
}

export function useCodeCopyButton() {
  return new CodeCopyButtonState(ctx.get());
}
