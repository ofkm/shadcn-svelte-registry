<script lang="ts">
  import { run } from 'svelte/legacy';

  import { DemoTabs } from '$lib/components/demo-tabs/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { useTableState } from '$lib/registry/utils/table-states.js';

  // Demo data
  const sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Admin', status: 'Active' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', status: 'Pending' },
  ];

  // Initialize table state
  const tableState = useTableState('demo-users', { pageSize: 3 });

  // Reactive filtered and sorted data
  let filteredData = $derived(
    sampleData.filter((item) => {
      const filters = tableState.filters;
      if (filters.status && item.status !== filters.status) return false;
      if (filters.role && item.role !== filters.role) return false;
      if (filters.search && !item.name.toLowerCase().includes(String(filters.search).toLowerCase())) return false;
      return true;
    })
  );

  let sortedData = $derived(
    [...filteredData].sort((a, b) => {
      const sort = tableState.sort;
      if (!sort.column || !sort.direction) return 0;

      const aVal = a[sort.column as keyof typeof a];
      const bVal = b[sort.column as keyof typeof b];

      if (sort.direction === 'asc') {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    })
  );

  let paginatedData = $derived(sortedData.slice((tableState.currentPage - 1) * tableState.pageSize, tableState.currentPage * tableState.pageSize));

  let totalPages = $derived(Math.ceil(sortedData.length / tableState.pageSize));

  const code = `<script lang="ts">
  import { useTableState } from '$lib/utils/table-states';

  // Initialize table state with unique ID
  const tableState = useTableState('users', { pageSize: 10 });

  // Reactive data filtering and sorting
  let sortedData = $derived(
    [...filteredData].sort((a, b) => {
      const sort = tableState.sort;
      if (!sort.column || !sort.direction) return 0;

      const aVal = a[sort.column as keyof typeof a];
      const bVal = b[sort.column as keyof typeof b];

      if (sort.direction === 'asc') {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    })
  );

let paginatedData = $derived(sortedData.slice((tableState.currentPage - 1) * tableState.pageSize, tableState.currentPage * tableState.pageSize));

let totalPages = $derived(Math.ceil(sortedData.length / tableState.pageSize));
<\/script>

<!-- Table controls -->
<div class="flex gap-2 mb-4">
  <select bind:value={filterStatus} on:change={() => tableState.setFilter('status', filterStatus)}>
    <option value="">All Statuses</option>
    <option value="Active">Active</option>
    <option value="Inactive">Inactive</option>
  </select>
  
  <select bind:value={pageSize} on:change={() => tableState.setPageSize(Number(pageSize))}>
    <option value="5">5 per page</option>
    <option value="10">10 per page</option>
    <option value="20">20 per page</option>
  </select>
</div>

<!-- Table -->
<table>
  <thead>
    <tr>
      <th onclick={() => tableState.toggleSort('name')}>Name</th>
      <th onclick={() => tableState.toggleSort('email')}>Email</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {#each paginatedData as item}
      <tr>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.status}</td>
      </tr>
    {/each}
  </tbody>
</table>

<!-- Pagination -->
<div class="flex gap-2">
  <button onclick={() => tableState.previousPage()} disabled={tableState.currentPage === 1}>
    Previous
  </button>
  <span>Page {tableState.currentPage} of {totalPages}</span>
  <button onclick={() => tableState.nextPage()} disabled={tableState.currentPage === totalPages}>
    Next
  </button>
</div>`;

  let searchValue = $state('');
  let statusFilter = $state('');
  let roleFilter = $state('');

  // Handle search
  run(() => {
    tableState.setFilter('search', searchValue || null);
  });
</script>

<DemoTabs {code}>
  <div class="space-y-4">
    <!-- Controls -->
    <div class="flex flex-wrap gap-3">
      <div class="flex-1 min-w-48">
        <input type="text" placeholder="Search by name..." bind:value={searchValue} class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
      </div>

      <select bind:value={statusFilter} onchange={() => tableState.setFilter('status', statusFilter || null)} class="rounded-md border border-input bg-background px-3 py-2 text-sm">
        <option value="">All Statuses</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
        <option value="Pending">Pending</option>
      </select>

      <select bind:value={roleFilter} onchange={() => tableState.setFilter('role', roleFilter || null)} class="rounded-md border border-input bg-background px-3 py-2 text-sm">
        <option value="">All Roles</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
      </select>

      <select value={tableState.pageSize} onchange={(e) => tableState.setPageSize(Number(e.currentTarget.value))} class="rounded-md border border-input bg-background px-3 py-2 text-sm">
        <option value="2">2 per page</option>
        <option value="3">3 per page</option>
        <option value="5">5 per page</option>
      </select>
    </div>

    <!-- Table -->
    <div class="rounded-md border">
      <table class="w-full">
        <thead>
          <tr class="border-b bg-muted/50">
            <th class="p-3 text-left font-medium cursor-pointer hover:bg-muted transition-colors" onclick={() => tableState.toggleSort('name')}>
              Name
              {#if tableState.sort.column === 'name'}
                <span class="ml-1">{tableState.sort.direction === 'asc' ? '↑' : '↓'}</span>
              {/if}
            </th>
            <th class="p-3 text-left font-medium cursor-pointer hover:bg-muted transition-colors" onclick={() => tableState.toggleSort('email')}>
              Email
              {#if tableState.sort.column === 'email'}
                <span class="ml-1">{tableState.sort.direction === 'asc' ? '↑' : '↓'}</span>
              {/if}
            </th>
            <th class="p-3 text-left font-medium">Role</th>
            <th class="p-3 text-left font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {#each paginatedData as item (item.id)}
            <tr class="border-b">
              <td class="p-3">{item.name}</td>
              <td class="p-3 text-muted-foreground">{item.email}</td>
              <td class="p-3">
                <Badge variant={item.role === 'Admin' ? 'default' : 'secondary'}>
                  {item.role}
                </Badge>
              </td>
              <td class="p-3">
                <Badge
                  variant={item.status === 'Active' ? 'default'
                  : item.status === 'Inactive' ? 'destructive'
                  : 'secondary'}
                >
                  {item.status}
                </Badge>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>

      {#if paginatedData.length === 0}
        <div class="p-8 text-center text-muted-foreground">No results found</div>
      {/if}
    </div>

    <!-- Pagination -->
    <div class="flex items-center justify-between">
      <div class="text-sm text-muted-foreground">
        Showing {(tableState.currentPage - 1) * tableState.pageSize + 1} to {Math.min(tableState.currentPage * tableState.pageSize, sortedData.length)} of {sortedData.length} results
      </div>

      <div class="flex items-center gap-2">
        <Button variant="outline" size="sm" onclick={() => tableState.previousPage()} disabled={tableState.currentPage === 1}>Previous</Button>

        <span class="text-sm px-3">
          Page {tableState.currentPage} of {totalPages}
        </span>

        <Button variant="outline" size="sm" onclick={() => tableState.nextPage()} disabled={tableState.currentPage === totalPages}>Next</Button>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="flex gap-2 pt-4 border-t">
      <Button variant="outline" size="sm" onclick={() => tableState.clearFilters()}>Clear Filters</Button>
      <Button variant="outline" size="sm" onclick={() => tableState.clearSort()}>Clear Sort</Button>
      <Button variant="outline" size="sm" onclick={() => tableState.reset()}>Reset All</Button>
    </div>
  </div>
</DemoTabs>
