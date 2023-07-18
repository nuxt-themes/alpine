import { createResolver, logger, defineNuxtModule } from '@nuxt/kit'
import { $fetch } from 'ofetch'
import { version } from './package.json'

const { resolve } = createResolver(import.meta.url)

// That allows to overwrite these dependencies paths via `.env` for local development
const envModules = {
  studio: process?.env?.THEME_DEV_STUDIO_PATH || '@nuxthq/studio',
}

const updateModule = defineNuxtModule({
  meta: {
    name: '@nuxt-themes/alpine'
  },
  setup (_, nuxt) {
    if (nuxt.options.dev) {
      $fetch('https://registry.npmjs.org/@nuxt-themes/alpine/latest').then((release) => {
        if (release.version > version) {
          logger.info(`A new version of Alpine (v${release.version}) is available: https://github.com/nuxt-themes/alpine/releases/latest`)
        }
      }).catch(() => {})
    }
  }
})

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  runtimeConfig: {
    public: {
      FORMSPREE_URL: process.env.FORMSPREE_URL
    }
  },
  pages: true,
  modules: [
    envModules.studio,
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    updateModule as any
  ],
  components: [
    { path: resolve('./components'), global: true },
    { path: resolve('./components/app'), global: true },
  //   { path: resolve('./components/content'), global: true },
  //   { path: resolve('./components/data-entry'), global: true }
  ],
  css: [
    resolve('./assets/main.css'),
  ],
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
  },
  experimental: {
    inlineSSRStyles: false
  },
  typescript: {
    includeWorkspace: true
  },
})
