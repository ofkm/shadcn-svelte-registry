import type { Component } from 'svelte';
import type { PropDefinition } from '$lib/components/prop-defintion.svelte';
import TableStatesDemo from '$lib/components/demos/table-states-demo.svelte';

export type UtilConfig = {
  name: string;
  title: string;
  description: string;
  component: Component;
  href: string;
  registryName: string;
  props?: PropDefinition[];
  functions?: UtilFunction[];
  new?: boolean;
};

export type UtilFunction = {
  name: string;
  description: string;
  signature: string;
  returns: string;
  example?: string;
};

export const utilsConfig: UtilConfig[] = [
  {
    name: 'table-states',
    title: 'Table States',
    description: 'A collection of utilities for managing table state including pagination, sorting, and filtering with persistent storage',
    component: TableStatesDemo,
    href: '/docs/utils/table-states',
    registryName: 'table-states',
    new: true,
    functions: [
      {
        name: 'useTableState',
        description: 'Hook for creating table state in Svelte components',
        signature: 'useTableState(tableId: string, initialState?: Partial<TableState>)',
        returns: 'TableStateManager',
        example: 'const tableState = useTableState("users", { pageSize: 15 });',
      },
      {
        name: 'createTableState',
        description: 'Create a persisted table state for a specific table',
        signature: 'createTableState(tableId: string, initialState?: Partial<TableState>)',
        returns: 'PersistedState<TableState>',
        example: 'const state = createTableState("products");',
      },
      {
        name: 'TableStateManager',
        description: 'Table state manager class for easier state management',
        signature: 'new TableStateManager(tableId: string, initialState?: Partial<TableState>)',
        returns: 'TableStateManager instance',
        example: 'const manager = new TableStateManager("orders");',
      },
    ],
    props: [
      {
        name: 'tableId',
        type: 'string',
        required: true,
        description: 'Unique identifier for the table',
      },
      {
        name: 'initialState',
        type: 'Partial<TableState>',
        description: 'Optional initial state override',
      },
      {
        name: 'pageSize',
        type: 'number',
        default: '10',
        description: 'Number of items per page',
      },
      {
        name: 'currentPage',
        type: 'number',
        default: '1',
        description: 'Current page number',
      },
    ],
  },
];

export function getUtilByName(name: string): UtilConfig | undefined {
  return utilsConfig.find((util) => util.name === name);
}

export function getAllUtilNames(): string[] {
  return utilsConfig.map((util) => util.name);
}
