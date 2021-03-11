<script>
  import Nav from "$components/common/Nav.svelte";
  import "$css";
</script>

<header class="bg-white dark:bg-gray-800">
  <Nav />
  <div class="md:flex">
    <div class="grid p-8 items-center">
      <slot />
    </div>
  </div>
</header>