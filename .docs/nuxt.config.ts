export default defineNuxtConfig({
  extends: '../',
  modules: ['@nuxtjs/plausible'],
  typescript: { includeWorkspace: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'stylesheet', href: '/css/supreme.css' }
      ]
    }
  },
})
