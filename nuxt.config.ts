import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt'
import { resolve } from 'pathe'

const themeDir = fileURLToPath(new URL('./', import.meta.url))
const resolveThemeDir = (path: string) => resolve(themeDir, path)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxthq/studio',
    '@nuxt-themes/config/module',
    '@nuxtjs/design-tokens/module',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/content'
  ],
  components: [
    '~/components',
    { path: '~/elements', global: true }
  ],
  tailwindcss: {
    viewer: false,
    exposeConfig: true,
    injectPosition: 'last'
  },
  css: [
    resolveThemeDir('./assets/main.css'),
    // Including Inter CSS is the first component to reproduce HMR issue. It also causes playground to look better,
    // since Inter is a native font for Tailwind UI
    '@fontsource/inter/400.css',
    '@fontsource/inter/500.css',
    '@fontsource/inter/600.css',
    '@fontsource/inter/700.css'
  ],
  content: {
    documentDriven: true,
    navigation: {
      fields: ['navTitle']
    },
    highlight: {
      theme: 'one-dark-pro',
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini', 'c', 'cpp']
    }
  },
  theme: {
    meta: {
      name: 'Alpine',
      description: 'Just a basic blog theme for Nuxt.',
      author: 'NuxtLabs'
    },
    options: true,
    tokens: true
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  }
})
