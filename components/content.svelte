<script>
  import ArrowRight32 from "carbon-icons-svelte/lib/ArrowRight32";
  import ArrowLeft32 from "carbon-icons-svelte/lib/ArrowLeft32";

  export let pagination = {};
</script>

<div class="mb-2 z-0 card shadow-2xl bg-base-100 text-base-content lg:ml-82">
  <div class="card-body sp--content">
    <slot />
  </div>
</div>

<div class="btn-group pagination lg:ml-82">
  {#if pagination.previous && pagination.previous.postName && pagination.previous.relativePath}
    <a
      sveltekit:prefetch
      href={"/" + pagination.previous.relativePath.replace(/\.[^/.]+$/, "")}
      class="pagination-btn btn btn-outline btn-wide"
      ><ArrowLeft32 /><span>{pagination.previous.postName}</span></a
    >
  {/if}
  {#if pagination.next && pagination.next.postName && pagination.next.relativePath}
    <a
      sveltekit:prefetch
      href={"/" + pagination.next.relativePath.replace(/\.[^/.]+$/, "")}
      class="pagination-btn btn btn-outline btn-wide"
      ><span>{pagination.next.postName}</span><ArrowRight32 /></a
    >
  {/if}
</div>

<style>
  .pagination {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .pagination-btn {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  .pagination-btn > span {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
