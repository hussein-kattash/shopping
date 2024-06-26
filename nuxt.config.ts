// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  modules: ["nuxt-primevue","@hebilicious/vue-query-nuxt",'@pinia/nuxt'],
  primevue: {
    usePrimeVue: true,
    components: {
      include: [
        "Button",
        "Menubar",
        "InputText",
        "Avatar",
        "Image",
        "Carousel",
        "Chip",
        "DataView",
        "DataViewLayoutOptions",
        "Rating",
        "Divider",
        "Card",
        "ProgressSpinner ",
        "InputNumber",
        "ConfirmDialog",
        "Toast",
        "Message",
        "InputText",
        "Password",
        "InlineMessage",
        "DataTable",
        "Column",
        "Skeleton",
        "Dropdown",
        "OverlayPanel"
      ],
    },
  },
  css: [
    "primeflex/primeflex.css",
    "primeflex/primeflex.min.css",
    "primevue/resources/themes/lara-light-teal/theme.css",
    "primeicons/primeicons.css",
    "/assets/main.scss",
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.BASE_URL
    }
  }
});
