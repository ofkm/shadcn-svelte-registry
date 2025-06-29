import type { Component } from 'svelte';
import type { PropDefinition } from '$lib/components/prop-defintion.svelte';
import DropdownButtonDemo from '$lib/components/demos/dropdown-button-demo.svelte';
import StatusBadgeDemo from '$lib/components/demos/status-badge-demo.svelte';
import MeterDemo from '$lib/components/demos/meter-demo.svelte';
import LabeledSwitchDemo from '$lib/components/demos/labeled-switch-demo.svelte';

export type ComponentConfig = {
  name: string;
  title: string;
  description: string;
  component: Component;
  href: string;
  registryName: string;
  props?: PropDefinition[];
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
        description: 'The underlying DOM element',
      },
      {
        name: 'mainButtonText',
        type: 'string',
        description: 'The text displayed on the main button (simple mode)',
      },
      {
        name: 'options',
        type: 'DropdownButtonOption[]',
        description: 'Array of dropdown options with label, value, disabled, and onclick handler (simple mode)',
      },
      {
        name: 'onMainButtonClick',
        type: '() => void',
        description: 'Callback function when main button is clicked',
      },
      {
        name: 'variant',
        type: 'ButtonVariant',
        default: 'default',
        description: 'The button variant style (default, destructive, outline, secondary, ghost, link)',
      },
      {
        name: 'size',
        type: 'ButtonSize',
        default: 'default',
        description: 'The button size (default, sm, lg, icon)',
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
        description: 'Whether the button is disabled',
      },
      {
        name: 'simple',
        type: 'boolean',
        default: 'false',
        description: 'Force simple mode (auto-detected if mainButtonText and options are provided)',
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
];

export function getComponentByName(name: string): ComponentConfig | undefined {
  return componentsConfig.find((component) => component.name === name);
}

export function getAllComponentNames(): string[] {
  return componentsConfig.map((component) => component.name);
}
