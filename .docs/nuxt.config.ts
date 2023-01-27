export default defineNuxtConfig({
  extends: '../',
  modules: ['@nuxtjs/plausible', '@nuxt/devtools-edge'],
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
