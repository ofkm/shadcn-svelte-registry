/*
 * Table State Utilities
 *
 * A collection of utilities for managing table state including pagination,
 * sorting, and filtering with persistent storage.
 */

import { PersistedState } from 'runed';

export interface TablePageSizes {
  default: number;
  [key: string]: number; // Allow dynamic table keys
}

export interface TableSortState {
  column: string | null;
  direction: 'asc' | 'desc' | null;
}

export interface TableFilters {
  [key: string]: string | number | boolean | null;
}

export interface TableState {
  pageSize: number;
  currentPage: number;
  sort: TableSortState;
  filters: TableFilters;
}

// Default configurations
const DEFAULT_PAGE_SIZES: TablePageSizes = {
  default: 10,
};

const DEFAULT_TABLE_STATE: TableState = {
  pageSize: 10,
  currentPage: 1,
  sort: {
    column: null,
    direction: null,
  },
  filters: {},
};

/**
 * Global page sizes state - shared across all tables
 */
export const globalPageSizes = new PersistedState<TablePageSizes>('table-page-sizes', DEFAULT_PAGE_SIZES, {
  storage: 'local',
  syncTabs: true,
});

/**
 * Create a persisted table state for a specific table
 *
 * @param tableId - Unique identifier for the table
 * @param initialState - Optional initial state override
 * @returns PersistedState instance for the table
 */
export function createTableState(tableId: string, initialState: Partial<TableState> = {}): PersistedState<TableState> {
  const defaultState = {
    ...DEFAULT_TABLE_STATE,
    pageSize: globalPageSizes.current[tableId] || globalPageSizes.current.default,
    ...initialState,
  };

  return new PersistedState<TableState>(`shadcn-table-${tableId}`, defaultState, {
    storage: 'local',
    syncTabs: true,
  });
}

/**
 * Table state manager class for easier state management
 */
export class TableStateManager {
  private state: PersistedState<TableState>;
  private tableId: string;

  constructor(tableId: string, initialState: Partial<TableState> = {}) {
    this.tableId = tableId;
    this.state = createTableState(tableId, initialState);
  }

  // Page size methods
  get pageSize(): number {
    return this.state.current.pageSize;
  }

  setPageSize(size: number): void {
    // Update both local state and global page sizes
    this.state.current = {
      ...this.state.current,
      pageSize: size,
      currentPage: 1, // Reset to first page when changing page size
    };

    globalPageSizes.current = {
      ...globalPageSizes.current,
      [this.tableId]: size,
    };
  }

  // Pagination methods
  get currentPage(): number {
    return this.state.current.currentPage;
  }

  setCurrentPage(page: number): void {
    this.state.current = {
      ...this.state.current,
      currentPage: page,
    };
  }

  nextPage(): void {
    this.setCurrentPage(this.currentPage + 1);
  }

  previousPage(): void {
    this.setCurrentPage(Math.max(1, this.currentPage - 1));
  }

  // Sorting methods
  get sort(): TableSortState {
    return this.state.current.sort;
  }

  setSorting(column: string, direction: 'asc' | 'desc'): void {
    this.state.current = {
      ...this.state.current,
      sort: { column, direction },
      currentPage: 1, // Reset to first page when sorting
    };
  }

  toggleSort(column: string): void {
    const currentSort = this.sort;

    if (currentSort.column !== column) {
      // New column - start with ascending
      this.setSorting(column, 'asc');
    } else if (currentSort.direction === 'asc') {
      // Same column, currently ascending - switch to descending
      this.setSorting(column, 'desc');
    } else {
      // Same column, currently descending - clear sort
      this.clearSort();
    }
  }

  clearSort(): void {
    this.state.current = {
      ...this.state.current,
      sort: { column: null, direction: null },
    };
  }

  // Filter methods
  get filters(): TableFilters {
    return this.state.current.filters;
  }

  setFilter(key: string, value: string | number | boolean | null): void {
    this.state.current = {
      ...this.state.current,
      filters: {
        ...this.state.current.filters,
        [key]: value,
      },
      currentPage: 1, // Reset to first page when filtering
    };
  }

  removeFilter(key: string): void {
    const { [key]: removed, ...remainingFilters } = this.state.current.filters;
    this.state.current = {
      ...this.state.current,
      filters: remainingFilters,
      currentPage: 1,
    };
  }

  clearFilters(): void {
    this.state.current = {
      ...this.state.current,
      filters: {},
      currentPage: 1,
    };
  }

  // Utility methods
  reset(): void {
    this.state.current = {
      ...DEFAULT_TABLE_STATE,
      pageSize: globalPageSizes.current[this.tableId] || globalPageSizes.current.default,
    };
  }

  // Get the complete state (useful for reactive subscriptions)
  get state$() {
    return this.state;
  }

  get currentState(): TableState {
    return this.state.current;
  }
}

/**
 * Legacy compatibility helpers for simple page size management
 */
export const tablePersistence = {
  getPageSize: (tableKey: string): number => {
    return globalPageSizes.current[tableKey] || globalPageSizes.current.default;
  },

  setPageSize: (tableKey: string, value: number): void => {
    globalPageSizes.current = {
      ...globalPageSizes.current,
      [tableKey]: value,
    };
  },
};

/**
 * Hook for creating table state in Svelte components
 *
 * @param tableId - Unique identifier for the table
 * @param initialState - Optional initial state
 * @returns TableStateManager instance
 */
export function useTableState(tableId: string, initialState: Partial<TableState> = {}): TableStateManager {
  return new TableStateManager(tableId, initialState);
}
