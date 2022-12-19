export default defineNuxtConfig({
  extends: '../',
  modules: ['nuxt-plausible'],
  typescript: {
    includeWorkspace: true
  },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: '/css/supreme.css' }
      ]
    }
  }
})
