import type { Component } from 'svelte';
import type { PropDefinition } from '$lib/components/prop-defintion.svelte';
import DropdownButtonDemo from '$lib/components/demos/dropdown-button-demo.svelte';
import StatusBadgeDemo from '$lib/components/demos/status-badge-demo.svelte';
import MeterDemo from '$lib/components/demos/meter-demo.svelte';
import LabeledSwitchDemo from '$lib/components/demos/labeled-switch-demo.svelte';
import CollapsibleCardDemo from '$lib/components/demos/collapsible-card-demo.svelte';
import AccentColorPickerDemo from '$lib/components/demos/accent-color-picker-demo.svelte';

export type ComponentConfig = {
  name: string;
  title: string;
  description: string;
  component: Component;
  href: string;
  registryName: string;
  props?: PropDefinition[];
  new?: boolean;
};

export const componentsConfig: ComponentConfig[] = [
  {
    name: 'dropdown-button',
    title: 'Dropdown Button',
    description: 'A customizable dropdown button component',
    component: DropdownButtonDemo,
    href: '/docs/dropdown-button',
    registryName: 'dropdown-button',
    props: [
      {
        name: 'ref',
        type: 'HTMLDivElement',
        bindable: true,
        description: 'The underlying DOM element for the Root wrapper',
      },
      {
        name: 'variant',
        type: 'ButtonVariant',
        default: 'default',
        description: 'Default variant applied to Main and Trigger buttons',
      },
      {
        name: 'size',
        type: 'ButtonSize',
        default: 'default',
        description: 'Default size applied to Main and Trigger buttons',
      },
      {
        name: 'align',
        type: "'start' | 'center' | 'end'",
        default: 'end',
        description: 'Alignment of the dropdown content',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables both Main and Trigger buttons',
      },
      {
        name: 'class',
        type: 'string',
        description: 'Additional CSS classes for the Root wrapper',
      },
    ],
  },
  {
    name: 'collapsible-card',
    title: 'Collapsible Card',
    description: 'A modern collapsible card component with simple and composable modes',
    component: CollapsibleCardDemo,
    href: '/docs/collapsible-card',
    registryName: 'collapsible-card',
    new: false,
    props: [
      {
        name: 'ref',
        type: 'HTMLDivElement',
        bindable: true,
        description: 'The underlying DOM element',
      },
      {
        name: 'title',
        type: 'string',
        description: 'The title text for the card header (simple mode)',
      },
      {
        name: 'subtitle',
        type: 'string',
        description: 'Optional subtitle text below the title (simple mode)',
      },
      {
        name: 'defaultOpen',
        type: 'boolean',
        default: 'false',
        description: 'Whether the card is open by default (simple mode)',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the card is disabled (simple mode)',
      },
      {
        name: 'simple',
        type: 'boolean',
        default: 'false',
        description: 'Force simple mode (auto-detected if title is provided)',
      },
      {
        name: 'class',
        type: 'string',
        description: 'Additional CSS classes',
      },
    ],
  },
  {
    name: 'labeled-switch',
    title: 'Labeled Switch',
    description: 'A switch component with integrated label and optional description',
    component: LabeledSwitchDemo,
    href: '/docs/labeled-switch',
    registryName: 'labeled-switch',
    props: [
      {
        name: 'ref',
        type: 'HTMLDivElement',
        bindable: true,
        description: 'The underlying DOM element',
      },
      {
        name: 'checked',
        type: 'boolean',
        default: 'false',
        bindable: true,
        description: 'The checked state of the switch (bindable)',
      },
      {
        name: 'label',
        type: 'string',
        required: true,
        description: 'The label text for the switch',
      },
      {
        name: 'description',
        type: 'string',
        description: 'Optional description text below the label',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the switch is disabled',
      },
      {
        name: 'id',
        type: 'string',
        description: 'Custom ID for the switch (auto-generated if not provided)',
      },
      {
        name: 'class',
        type: 'string',
        description: 'Additional CSS classes',
      },
    ],
  },
  {
    name: 'meter',
    title: 'Meter',
    description: 'A meter component similar to bits-ui meter',
    component: MeterDemo,
    href: '/docs/meter',
    registryName: 'meter',
    props: [
      {
        name: 'value',
        type: 'number',
        required: true,
        bindable: true,
        description: 'The current value of the meter',
      },
      {
        name: 'max',
        type: 'number',
        default: '100',
        description: 'The maximum value of the meter',
      },
      {
        name: 'min',
        type: 'number',
        default: '0',
        description: 'The minimum value of the meter',
      },
      {
        name: 'label',
        type: 'string',
        description: 'Label for the meter',
      },
      {
        name: 'valueLabel',
        type: 'string',
        description: 'Label for the current value',
      },
      {
        name: 'showLabel',
        type: 'boolean',
        default: 'true',
        description: 'Whether to show the label',
      },
      {
        name: 'showValueLabel',
        type: 'boolean',
        default: 'true',
        description: 'Whether to show the value label',
      },
      {
        name: 'variant',
        type: "'default' | 'success' | 'warning' | 'destructive'",
        default: 'default',
        description: 'The visual variant of the meter',
      },
      {
        name: 'size',
        type: "'sm' | 'default' | 'lg'",
        default: 'default',
        description: 'The size of the meter',
      },
      {
        name: 'class',
        type: 'string',
        description: 'Additional CSS classes',
      },
    ],
  },
  {
    name: 'status-badge',
    title: 'Status Badge',
    description: "Status badges mirrored off GitHub's design",
    component: StatusBadgeDemo,
    href: '/docs/status-badge',
    registryName: 'status-badge',
    props: [
      // No ref prop - status-badge.svelte doesn't have ref = $bindable()
      {
        name: 'text',
        type: 'string',
        required: true,
        description: 'The text content of the badge',
      },
      {
        name: 'variant',
        type: "'red' | 'purple' | 'green' | 'blue' | 'gray' | 'amber' | 'pink' | 'indigo' | 'cyan' | 'lime' | 'emerald' | 'teal' | 'sky' | 'violet' | 'fuchsia' | 'rose' | 'orange'",
        default: 'gray',
        description: 'The color variant of the badge',
      },
      {
        name: 'class',
        type: 'string',
        description: 'Additional CSS classes',
      },
    ],
  },
  {
    name: 'accent-color-picker',
    title: 'Accent Color Picker',
    description: 'A customizable color picker for selecting accent colors with predefined options and custom color support',
    component: AccentColorPickerDemo,
    href: '/docs/accent-color-picker',
    registryName: 'accent-color-picker',
    new: true,
    props: [
      {
        name: 'ref',
        type: 'HTMLDivElement',
        bindable: true,
        description: 'The underlying DOM element for the Root wrapper',
      },
      {
        name: 'colors',
        type: 'AccentColor[]',
        default: 'defaultAccentColors',
        description: 'Array of predefined colors to display',
      },
      {
        name: 'selectedColor',
        type: 'string',
        bindable: true,
        description: 'The currently selected color value (bindable)',
      },
      {
        name: 'previousColor',
        type: 'string',
        default: "''",
        description: 'Previous custom color to display in the picker',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables the color picker',
      },
      {
        name: 'onColorChange',
        type: '(color: string) => void',
        description: 'Callback function when color changes',
      },
      {
        name: 'class',
        type: 'string',
        description: 'Additional CSS classes for the Root wrapper',
      },
    ],
  },
];

export function getComponentByName(name: string): ComponentConfig | undefined {
  return componentsConfig.find((component) => component.name === name);
}

export function getAllComponentNames(): string[] {
  return componentsConfig.map((component) => component.name);
}
