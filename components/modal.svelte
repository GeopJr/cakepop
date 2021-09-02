<script>
  export let isOpen;
</script>

<div
  class={`-mt-16 fixed overflow-none h-screen w-screen z-5 sm:hidden ${
    isOpen ? "bg-black bg-opacity-70 flex" : "hidden"
  }`}
  on:click={() => (isOpen = false)}
/>
<div
  class={`sp--modal bg-base-100 py-16 z-6 fixed w-full justify-center ${
    isOpen ? "flex" : "hidden"
  }`}
>
  <slot />
</div>

<style>
  .sp--modal {
    border-radius: var(--rounded-box, 1rem);
  }
</style>
