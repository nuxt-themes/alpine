export default defineNuxtConfig({
  extends: '../',
  modules: ['@nuxtjs/plausible'],
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
