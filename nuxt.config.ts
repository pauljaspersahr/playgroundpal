// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";

export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@nuxtjs/supabase",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/shadcn",
  },
  nitro: {
    plugins: ["~/server/plugins/mongodb.ts"],
  },
  alias: {
    "@models": fileURLToPath(new URL("./models/", import.meta.url)),
    "@blocks": fileURLToPath(new URL("./components/blocks", import.meta.url)),
  },
  supabase: {
    redirect: false,
  },
});
