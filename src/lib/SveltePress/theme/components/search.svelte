<script>
  export let value;
  export let results;
  export let selectedHref;
</script>

<div class="dropdown dropdown-end">
  <input type="text" placeholder="Search" class="input sp--search" bind:value />
  {#if results.length > 0}
    <ul
      tabindex="0"
      class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 shadow-2xl"
    >
      {#each Array(results.length < 5 ? results.length : 5) as _, i}
        <li>
          <button
            class="btn sp--wrap--btn"
            on:click={() => (selectedHref = results[i].href)}
          >
            {results[i].text}
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .sp--wrap--btn {
    text-overflow: ellipsis;
    white-space: wrap;
    overflow: hidden;
  }
</style>
