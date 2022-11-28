// Default config: https://github.com/nuxt-themes/alpine/blob/dev/theme/theme.config.ts
export default defineAppConfig({
  alpine: {
    header: {
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'alpine' // alt of the logo
      }
    }
  }
})
