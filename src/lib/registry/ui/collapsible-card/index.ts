import { Collapsible as CollapsiblePrimitive } from 'bits-ui';
import Root from './collapsible-card.svelte';
import Trigger from './collapsible-card-trigger.svelte';
import Header from './collapsible-card-header.svelte';
import Content from './collapsible-card-content.svelte';
import Body from './collapsible-card-body.svelte';

const CollapsibleRoot = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.Trigger;

export {
  Root,
  Trigger,
  Header,
  Content,
  Body,
  CollapsibleRoot,
  CollapsibleTrigger,
  //
  Root as CollapsibleCard,
  Trigger as CollapsibleCardTrigger,
  Header as CollapsibleCardHeader,
  Content as CollapsibleCardContent,
  Body as CollapsibleCardBody,
  CollapsibleRoot as CollapsibleCardRoot,
  CollapsibleTrigger as CollapsibleCardPrimitiveTrigger,
};

// Re-export types
export type { CollapsibleCardProps } from './collapsible-card.svelte';
export type { CollapsibleCardTriggerProps } from './collapsible-card-trigger.svelte';
export type { CollapsibleCardHeaderProps } from './collapsible-card-header.svelte';
export type { CollapsibleCardContentProps } from './collapsible-card-content.svelte';
export type { CollapsibleCardBodyProps } from './collapsible-card-body.svelte';
