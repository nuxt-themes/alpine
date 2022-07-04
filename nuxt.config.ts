import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-theme-kit/module', '@nuxtjs/tailwindcss', '@nuxt/content'],
  content: {
    documentDriven: true
  },
  theme: {
    meta: {
      name: 'Alpine',
      description: 'Just a basic blog theme for Nuxt.',
      author: 'NuxtLabs'
    },
    options: true,
    tokens: true
  }
})
