import { createResolver } from '@nuxt/kit'

const { resolve: resolveThemeDir } = createResolver(import.meta.url)

// That allows to overwrite these dependencies paths via `.env` for local development
const envModules = {
  tokens: process?.env?.THEME_DEV_TOKENS_PATH || '@nuxt-themes/tokens',
  elements: process?.env?.THEME_DEV_ELEMENTS_PATH || '@nuxt-themes/elements',
  studio: process?.env?.THEME_DEV_STUDIO_PATH || '@nuxthq/studio',
  typography: process?.env?.THEME_DEV_TYPOGRAPHY_PATH || '@nuxt-themes/typography'
}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: [envModules.typography, envModules.elements],

  pages: true,

  // TODO: Remove TW
  tailwindcss: {
    viewer: false,
    exposeConfig: true,
    injectPosition: 'last'
  },

  modules: [
    envModules.tokens,
    envModules.studio,
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],

  components: [
    { path: resolveThemeDir('./components'), global: true },
    { path: resolveThemeDir('./components/content'), global: true },
    { path: resolveThemeDir('./components/data-entry'), global: true }
  ],

  css: [
    // Inter font
    '@fontsource/inter/400.css',
    '@fontsource/inter/500.css',
    '@fontsource/inter/600.css',
    '@fontsource/inter/700.css'
  ],

  tailwindcss: {
    cssPath: resolveThemeDir('./assets/main.css'),
    viewer: false
  },

  colorMode: {
    classSuffix: ''
  },

  content: {
    documentDriven: true,
    navigation: {
      fields: ['navTitle']
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini', 'c', 'cpp']
    }
  }
})
