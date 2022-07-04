import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-theme-kit/module', '@nuxtjs/tailwindcss', '@nuxt/content'],
  content: {
    documentDriven: true
  },
  theme: {
    options: true,
    tokens: true
  }
})
