<script lang="ts">
  // Remove Button and ArrowRight imports since navigation is now in layout
</script>

<svelte:head>
  <title>Introduction - OFKM shadcn-svelte Registry</title>
  <meta name="description" content="Custom shadcn-svelte components built with Bits UI and Tailwind CSS." />
</svelte:head>

<!-- Remove the navigation div and mx-auto max-w-4xl wrapper -->
<header class="mb-8">
  <h1 class="text-4xl font-bold tracking-tight mb-4">Introduction</h1>
  <p class="text-xl text-muted-foreground">Custom re-usable components for SvelteKit Projects</p>
</header>

<div class="max-w-none">
  <p class="leading-7 [&:not(:first-child)]:mt-6">
    A collection of custom components that extend the shadcn-svelte ecosystem. These components follow the same principles as shadcn-svelte but are created for projects I work on that fit the needs of those scenarios.
  </p>

  <p class="leading-7 [&:not(:first-child)]:mt-6">
    <strong>This is not a component library.</strong> It's a collection of components that you can copy and paste into your apps and customize to fit your needs.
  </p>

  <p class="leading-7 [&:not(:first-child)]:mt-6">You know how most traditional component libraries work: you install a package from NPM, import the components, and use them in your app.</p>

  <p class="leading-7 [&:not(:first-child)]:mt-6">
    This approach works well until you need to customize a component to fit your design system or require functionality that isn't included in the library. Often, you end up wrapping library components, writing workarounds to override styles, or
    mixing components from different libraries with incompatible APIs.
  </p>

  <p class="leading-7 [&:not(:first-child)]:mt-6">This is what this registry aims to solve. It is built around the same principles as shadcn-svelte:</p>

  <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
    <li><strong>Open Code:</strong> The component code is open for modification.</li>
    <li><strong>Composition:</strong> Components use a common, composable interface.</li>
    <li><strong>Distribution:</strong> Easy to install via the shadcn-svelte CLI.</li>
    <li><strong>Beautiful Defaults:</strong> Carefully chosen default styles.</li>
    <li><strong>Customizable:</strong> Full control to modify components as needed.</li>
  </ul>

  <h2 class="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">Open Code</h2>
  <p class="leading-7 [&:not(:first-child)]:mt-6">These components give you the actual component code. You have full control to customize and extend the components to your needs. This means:</p>

  <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
    <li><strong>Full Transparency:</strong> You see exactly how each component is built.</li>
    <li><strong>Easy Customization:</strong> Modify any part of a component to fit your design and functionality requirements.</li>
    <li><strong>No Vendor Lock-in:</strong> The code is yours to own and modify.</li>
  </ul>

  <p class="leading-7 [&:not(:first-child)]:mt-6">In a typical library, if you need to change a component's behavior, you have to override styles or wrap the component. With these components, you simply edit the code directly.</p>

  <h2 class="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">Composition</h2>
  <p class="leading-7 [&:not(:first-child)]:mt-6">Every component follows the same patterns as shadcn-svelte. They use a common, composable interface built on top of Bits UI primitives. This makes them predictable and easy to understand.</p>

  <p class="leading-7 [&:not(:first-child)]:mt-6">A shared, composable interface means you're not learning different APIs for every new component. The patterns are consistent across all components.</p>

  <h2 class="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">Distribution</h2>
  <p class="leading-7 [&:not(:first-child)]:mt-6">Components are distributed using the same system as shadcn-svelte:</p>

  <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
    <li><strong>Schema:</strong> A flat-file structure that defines components and their dependencies.</li>
    <li><strong>CLI:</strong> Install components using the shadcn-svelte command-line tool.</li>
  </ul>

  <p class="leading-7 [&:not(:first-child)]:mt-6">You can install any component with a single command and it will be added to your project with all necessary files and dependencies.</p>
</div>
