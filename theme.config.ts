import { defineTheme } from 'nuxt-theme-kit'

export default defineTheme({
  header: {
    position: 'right' // possible value are : 'none' | 'left' | 'center' | 'right'
  },
  footer: {
    title: true, // possible value are : true | false
    navigation: true, // possible value are : true | false
    position: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
    socials: {
      enabled: true, // possible value are : true | false
      icons: true, // possible value are : true | false
      message: '' // string that will be displayed on top of the icons / text (leave empty to disable)
    }
  },
  socials: {
    twitter: 'https://twitter.com/nuxtlabs',
    instagram: 'https://www.instagram.com/atinuxt',
    linkedin: 'https://www.linkedin.com/company/nuxtlabs'
  }
})
