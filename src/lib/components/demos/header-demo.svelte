<script lang="ts">
  import { DemoTabs } from '$lib/components/demo-tabs/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Header } from '$lib/registry/ui/header/index.js';
  import { Github, Settings, Search } from '@lucide/svelte';

  const code = `<script lang="ts">
  import { Header } from '$lib/components/ui/header';
  import { Button } from '$lib/components/ui/button';
  import { Badge } from '$lib/components/ui/badge';
  import { Github, Settings, Search } from '@lucide/svelte';
<\/script>

<!-- Sticky Header -->
<Header variant="sticky" blur border>
  <Header.Container size="xl">
    <Header.Brand href="#">
      <div class="flex size-6 items-center justify-center rounded bg-foreground">
        <span class="text-xs font-bold text-background">K</span>
      </div>
      <span class="font-bold">OFKM Registry</span>
    </Header.Brand>

    <Header.MobileButton onclick={() => (mobileMenuOpen = !mobileMenuOpen)} />

    <Header.Spacer />

    <Header.Nav class="hidden md:flex">
      <Button variant="ghost" size="sm">Docs</Button>
    </Header.Nav>

    <Header.Actions>
      <Button variant="ghost" size="sm">
        <Search class="size-4" />
      </Button>
      <Button variant="ghost" size="sm">
        <Github class="size-4" />
      </Button>
      <Button variant="ghost" size="sm">
        <Settings class="size-4" />
      </Button>
    </Header.Actions>
  </Header.Container>
</Header>

<!-- Floating Header -->
<Header variant="floating" blur border class="!absolute !top-4 !left-1/2 !-translate-x-1/2 !z-10">
  <Header.Container size="md">
    <Header.Brand>
      <Badge variant="outline">New</Badge>
      <span class="font-semibold">Floating Header</span>
    </Header.Brand>

    <Header.Spacer />

    <Header.Actions>
      <Button size="sm" variant="outline">Learn More</Button>
      <Button size="sm">Get Started</Button>
    </Header.Actions>
  </Header.Container>
</Header>

<!-- Simple Header -->
<Header variant="default" border={false} blur={false}>
  <Header.Container size="lg">
    <Header.Brand>
      <span class="text-xl font-bold">Simple</span>
    </Header.Brand>

    <Header.Spacer />

    <Header.Nav>
      <Button variant="link" size="sm">About</Button>
      <Button variant="link" size="sm">Contact</Button>
    </Header.Nav>
  </Header.Container>
</Header>`;

  let mobileMenuOpen = $state(false);
</script>

<DemoTabs {code}>
  <div class="space-y-8">
    <!-- Default sticky header -->
    <div>
      <h3 class="text-lg font-semibold mb-4">Sticky Header</h3>
      <div class="border rounded-lg overflow-hidden">
        <Header variant="sticky" blur border>
          <Header.Container size="xl">
            <Header.Brand href="#">
              <div class="flex size-6 items-center justify-center rounded bg-foreground">
                <span class="text-xs font-bold text-background">K</span>
              </div>
              <span class="font-bold">OFKM Registry</span>
            </Header.Brand>

            <Header.MobileButton onclick={() => (mobileMenuOpen = !mobileMenuOpen)} />

            <Header.Spacer />

            <Header.Nav class="hidden md:flex">
              <Button variant="ghost" size="sm">Docs</Button>
            </Header.Nav>

            <Header.Actions>
              <Button variant="ghost" size="sm">
                <Search class="size-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Github class="size-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings class="size-4" />
              </Button>
            </Header.Actions>
          </Header.Container>
        </Header>

        <!-- Demo content -->
        <div class="p-8 bg-muted/30">
          <h4 class="text-lg font-semibold mb-2">Page Content</h4>
          <p class="text-muted-foreground">This header will stick to the top when scrolling.</p>
        </div>
      </div>
    </div>

    <!-- Floating header -->
    <div>
      <h3 class="text-lg font-semibold mb-4">Floating Header</h3>
      <div class="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-8 min-h-[300px] overflow-hidden">
        <Header variant="floating" blur border class="!absolute !top-4 !left-1/2 !-translate-x-1/2 !z-10">
          <Header.Container size="md">
            <Header.Brand>
              <span class="font-semibold">Floating Header</span>
            </Header.Brand>

            <Header.Spacer />

            <Header.Actions>
              <Button size="sm">Login</Button>
            </Header.Actions>
          </Header.Container>
        </Header>

        <div class="mt-20 text-center">
          <h4 class="text-xl font-semibold mb-2">Hero Section</h4>
          <p class="text-muted-foreground">Content below the floating header.</p>
        </div>
      </div>
    </div>

    <!-- Simple header -->
    <div>
      <h3 class="text-lg font-semibold mb-4">Simple Header</h3>
      <div class="border rounded-lg overflow-hidden">
        <Header variant="default" border={false} blur={false}>
          <Header.Container size="lg">
            <Header.Brand>
              <span class="text-xl font-bold">Simple</span>
            </Header.Brand>

            <Header.Spacer />

            <Header.Nav>
              <Button variant="link" size="sm">About</Button>
              <Button variant="link" size="sm">Contact</Button>
            </Header.Nav>
          </Header.Container>
        </Header>

        <div class="p-8">
          <p class="text-muted-foreground">Clean header without blur or border effects.</p>
        </div>
      </div>
    </div>
  </div>
</DemoTabs>
