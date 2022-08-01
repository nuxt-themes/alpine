import { defineNuxtConfig } from 'nuxt'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    // TODO: improve to leverage only `@nuxt/studio`
    '@nuxt-themes/config/module',
    '@nuxtjs/design-tokens/module',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@vueuse/nuxt'
  ],
  // TODO: shall be added by Studio or Nuxt Content v3
  components: [
    resolve('./components'),
    { path: resolve('./elements'), global: true }
  ],
  css: [
    resolve('./assets/main.css'),
    '@fontsource/inter/400.css',
    '@fontsource/inter/500.css',
    '@fontsource/inter/600.css',
    '@fontsource/inter/700.css'
  ],
  tailwindcss: {
    injectPosition: 'last'
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: 'one-dark-pro',
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini', 'c', 'cpp']
    }
  },
  app: {
    theme: {
      meta: {
        name: 'Alpine',
        description: 'Just a basic blog theme for Nuxt.',
        author: 'NuxtLabs',
        url: 'https://alpine.nuxt.dev'
      }
    }
  },
  colorMode: {
    classSuffix: ''
  },
  experimental: {
    viteNode: true
  }
})
