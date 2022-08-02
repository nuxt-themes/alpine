import { defineTheme } from '@nuxt-themes/config'

export default defineTheme({
  header: {
    position: 'left', // possible value are : 'none' | 'left' | 'center' | 'right'
    logo: {
      enabled: true, // possible value are : true | false
      logo: '/logo.svg', // path of the logo
      logoDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
      alt: 'alpine' // alt of the logo
    }
  },
  footer: {
    title: false, // possible value are : true | false
    navigation: false, // possible value are : true | false
    position: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
    socials: {
      icons: true, // possible value are : true | false
      message: 'Follow me on' // string that will be displayed on top of the icons / text (leave empty to disable)
    }
  },
  socials: {
    twitter: 'https://twitter.com/nuxtlabs',
    instagram: 'https://www.instagram.com/atinuxt',
    linkedin: 'https://www.linkedin.com/company/nuxtlabs'
  }
})
