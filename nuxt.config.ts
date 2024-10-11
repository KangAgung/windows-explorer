// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  app: {
    head: {
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  srcDir: 'src',

  components: [
    {
      path: '~/components',
      pathPrefix: true,
    },
  ],

  runtimeConfig: {
    nodeEnv: process.env.NOVE_ENV,
    public: {
      apiEndpoint: process.env.API_ENDPOINT,
    },
  },

  modules: [
    '@nuxt/ui',
    '@unocss/nuxt',
  ],
})