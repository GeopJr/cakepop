// Use this file to override the main config
import sveltePreprocess from "svelte-preprocess";
import WindiCSS from "vite-plugin-windicss";

export const config = {
  kit: {
    vite: () => ({
      plugins: [WindiCSS.default()],
    }),
  },
  preprocess: [
    sveltePreprocess({
      scss: true,
      sass: true,
    }),
  ],
};
