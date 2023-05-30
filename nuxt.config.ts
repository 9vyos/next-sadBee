// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/apollo'],

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://moonshot.hannah-log.site/graphql',
      },
    },
  },

  devtools: {
    enabled: true,
  },
});
