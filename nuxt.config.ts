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
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  nitro: {
    plugins: ["~/server/plugins/mongodb.ts"],
  },
  alias: {
    "@models": fileURLToPath(new URL("./models/", import.meta.url)),
  },
});
