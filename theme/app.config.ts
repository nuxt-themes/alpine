export default defineAppConfig({
  alpine: {
    title: 'Alpine',
    description: 'The minimalist blog theme',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'inline', // possible value are : 'none' | 'left' | 'center' | 'right' | 'inline'
      logo: false
    },
    footer: {
      credits: {
        enabled: true, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: false, // possible value are : true | false
      position: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      socials: {
        icons: true, // possible value are : true | false
        message: 'Follow me on' // string that will be displayed on top of the icons / text (leave empty to disable)
      }
    },
    socials: [
      {
        icon: 'twitter',
        label: 'Twitter',
        link: 'https://twitter.com/nuxtlabs'
      },
      {
        icon: 'instagram',
        label: 'Instagram',
        link: 'https://www.instagram.com/atinuxt'
      },
      {
        icon: 'linkedin',
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/company/nuxtlabs'
      }
    ]
  }
})
