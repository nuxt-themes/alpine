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
      position: 'right',
      logo: {
        path: '/logo.svg',
        pathDark: '/logo-dark.svg',
        alt: 'alpine'
      }
    },
    footer: {
      credits: {
        enabled: true,
        text: 'Alpine',
        repository: 'https://www.github.com/nuxt-themes/alpine'
      },
      navigation: true,
      alignment: 'center',
      message: 'Follow me on'
    },
    socials: {
      twitter: 'nuxtlabs',
      instagram: 'atinuxt',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nuxtlabs'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
