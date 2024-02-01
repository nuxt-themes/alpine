export default defineAppConfig({
  alpine: {
    title: 'Счастье в путешествиях',
    description: 'Я делюсь своим опытом и знаниями, чтобы помочь вам открыть для себя мир и сделать ваше путешествие ярким и запоминающимся.',
    keywords: 'Путешествие, Азия, Тайланд, Владивосток, Китай, Вьетнам',
    image: {
      src: '/aonang.jpg',
      alt: 'Анна путешественица',
      width: 400,
      height: 300
    },

    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'Путешествие' // alt of the logo
      }
    },

    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: '' // string that will be displayed in the footer (leave empty or delete to disable)
    },

    socials: {
      twitter: '',
      instagram: '',
      youtube: 'channel/UC6bOlfqP81ezjnYp2DnSfHw',
      vk: {
        icon: 'uil:vk',
        label: 'VK',
        href: 'https://vk.com/happinessintravel'
      }
    },

    form: {
      successMessage: 'Message sent. Thank you!'
    },

    backToTop: {
      text: 'К началу'
    },
    back: {
      text: 'Назад',
    }
  }
})
