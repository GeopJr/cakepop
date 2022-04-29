<script>
  import "virtual:windi.css";

  import { page } from "$app/stores";

  import Search from "$lib/SveltePress/components/search.svelte";
  import SearchModal from "$lib/SveltePress/theme/components/modal.svelte";

  import { theme } from "../../../../stores";
  import Config from "$lib/SveltePress/sveltePress.config";

  import RadioButton24 from "carbon-icons-svelte/lib/RadioButton24";
  import Contrast24 from "carbon-icons-svelte/lib/Contrast24";
  import Sun24 from "carbon-icons-svelte/lib/Sun24";
  import Moon24 from "carbon-icons-svelte/lib/Moon24";
  import Menu24 from "carbon-icons-svelte/lib/Menu24";
  import Close24 from "carbon-icons-svelte/lib/Close24";
  import OverflowMenuVertical24 from "carbon-icons-svelte/lib/OverflowMenuVertical24";
  import Search24 from "carbon-icons-svelte/lib/Search24";

  const themes = {
    light: ["g10", "white"],
    dark: ["g90", "g100"],
  };

  function hasContrast(themeName) {
    return ["g90", "g10"].includes(themeName);
  }
  function isDark(themeName) {
    return ["g100", "g90"].includes(themeName);
  }

  function setTheme(toggleTheme = true) {
    let themeType = isDark($theme) ? "dark" : "light";
    let contrastType = hasContrast($theme) ? 0 : 1;
    if (toggleTheme) {
      themeType = themeType === "dark" ? "light" : "dark";
    } else {
      contrastType = contrastType === 1 ? 0 : 1;
    }
    theme.set(themes[themeType][contrastType]);
  }

  function isExternal(link) {
    const host = "https://" + $page.host;
    return new URL(link, host).origin !== host;
  }

  $: contrastIcon = hasContrast($theme) ? RadioButton24 : Contrast24;
  $: themeIcon = isDark($theme) ? Sun24 : Moon24;

  let isOpen = false;
  $: navSize =
    nav.length > 14 ? "btn-xs" : nav.length > 7 ? "btn-sm" : "btn-md";

  export let isSideNavOpen;
  export let sidebar;
  export let nav;
</script>

<header
  class="sticky top-0 z-50 rounded-t-none navbar mb-2 shadow-md bg-neutral text-neutral-content rounded-box"
>
  <div class={`flex-none lg:hidden ${sidebar ? "inline-flex" : "hidden"}`}>
    <button
      class="btn btn-square btn-ghost"
      aria-label="Menu"
      on:click={() => {
        isSideNavOpen = !isSideNavOpen;
        isOpen ? (isOpen = false) : null;
      }}
    >
      {#if isSideNavOpen}
        <Close24 />
      {:else}
        <Menu24 />
      {/if}
    </button>
  </div>
  <div class="flex-none px-2 mx-2">
    <a class="text-lg font-bold" href="/">
      {Config.title}
    </a>
  </div>
  <div class="flex-1 px-2 mx-2">
    <div class="items-stretch hidden lg:flex">
      {#if nav.length > 5}
        <div class="dropdown dropdown-hover">
          <div tabindex="0" class="m-1 btn">Pages</div>
          <ul
            tabindex="0"
            class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
          >
            {#each nav as navItem}
              <li>
                <a
                  class="btn btn-ghost rounded-btn"
                  href={navItem.link}
                  target={isExternal(navItem.link) ? "_blank" : undefined}
                  rel={isExternal(navItem.link) ? "noopener" : undefined}
                  sveltekit:prefetch={!isExternal(navItem.link) ? true : null}
                >
                  {navItem.name}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {:else}
        {#each nav as navItem}
          <a
            class="btn btn-ghost btn-sm rounded-btn"
            href={navItem.link}
            target={isExternal(navItem.link) ? "_blank" : undefined}
            rel={isExternal(navItem.link) ? "noopener" : undefined}
            sveltekit:prefetch={!isExternal(navItem.link) ? true : null}
          >
            {navItem.name}
          </a>
        {/each}
      {/if}
    </div>
  </div>
  <div class="hidden sm:flex flex-none">
    <div class="form-control">
      <Search />
    </div>
  </div>
  <div class="flex-none hidden lg:inline-flex">
    <button
      aria-label="Toggle Contrast"
      class="btn btn-square btn-ghost"
      on:click={() => setTheme(false)}
    >
      <svelte:component this={contrastIcon} />
    </button>
    <button
      aria-label="Toggle Theme"
      class="btn btn-square btn-ghost"
      on:click={() => setTheme()}
    >
      <svelte:component this={themeIcon} />
    </button>
  </div>
  <div class="flex-none lg:hidden">
    <button
      class="btn btn-square btn-ghost sm:hidden"
      aria-label="Menu"
      on:click={() => {
        isOpen = !isOpen;
        isSideNavOpen ? (isSideNavOpen = false) : null;
      }}
    >
      {#if isOpen}
        <Close24 />
      {:else}
        <Search24 />
      {/if}
    </button>
    <div class="dropdown dropdown-hover dropdown-end ">
      <button class="btn btn-square btn-ghost" aria-label="Menu">
        <OverflowMenuVertical24 />
      </button>
      <ul
        tabindex="0"
        class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 shadow-2xl"
      >
        {#each nav as navItem}
          <li>
            <a
              class={`btn btn-ghost rounded-btn sp--wrap--btn ${navSize} ${
                navSize !== "btn-md" ? "sp--no--y--padding" : ""
              }`}
              href={navItem.link}
              target={isExternal(navItem.link) ? "_blank" : undefined}
              rel={isExternal(navItem.link) ? "noopener" : undefined}
              sveltekit:prefetch={!isExternal(navItem.link) ? true : null}
            >
              {navItem.name}
            </a>
          </li>
        {/each}
        <li><div class="divider" /></li>
        <li>
          <button
            class={`btn btn-ghost rounded-btn ${navSize} ${
              navSize !== "btn-md" ? "sp--no--y--padding" : ""
            }`}
            on:click={() => setTheme(false)}
          >
            Toggle Contrast
          </button>
        </li>
        <li>
          <button
            class={`btn btn-ghost rounded-btn ${navSize} ${
              navSize !== "btn-md" ? "sp--no--y--padding" : ""
            }`}
            on:click={() => setTheme()}
          >
            Toggle Theme
          </button>
        </li>
      </ul>
    </div>
  </div>
</header>

<div class="sm:hidden">
  <SearchModal bind:isOpen>
    <Search bind:isOpen />
  </SearchModal>
</div>

<style>
  .sp--wrap--btn {
    text-overflow: ellipsis;
    white-space: wrap;
    overflow: hidden;
  }
  .sp--no--y--padding {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
</style>
