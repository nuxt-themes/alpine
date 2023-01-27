export default defineNuxtSchema({
  appConfig: {
    /**
     * Alpine theme configuration.
     *
     * @studio-icon carbon:blog
    */
    alpine: {
      /**
       * Website title, used as header default title and meta title.
       *
       * @studio-icon material-symbols:title
       */
      title: 'Alpine',
      /**
       * Website description, used for meta description.
       *
       * @studio-icon material-symbols:description
       */
      description: 'The minimalist blog theme',
      /**
       * Cover image.
       *
       * @example '/cover.jpg'
       *
       * @studio-icon dashicons:cover-image
       */
      image: {
        src: '/social-card-preview.png',
        alt: 'An image showcasing my project.',
        width: 400,
        height: 300
      },
      /**
       * Header configuration.
       *
       * @studio-icon fluent:document-header-24-regular
       */
      header: {
        /**
         * Header position.
         *
         * @type {'left'|'center'|'right'}
         */
        position: 'right',
        /**
         * Header logo.
         *
         * @studio-icon dashicons:cover-image
         */
        logo: {
          /**
           * Path of the logo.
           */
          path: '/logo.svg',
          /**
           * Path of the logo in dark mode.
           *
           * Leave it empty if you want to use the same logo.
           */
          pathDark: '/logo-dark.svg',
          /**
           * Alt description for the image.
           */
          alt: 'Alpine theme logo'
        }
      },
      /**
       * Footer configuration.
       *
       * @studio-icon fluent:document-footer-24-regular
       */
      footer: {
        /**
         * Footer credits.
         */
        credits: {
          /**
           * Toggle the footer.
           */
          enabled: true,
          /**
           * Text to be displayed.
           */
          text: 'Alpine',
          /**
           * GitHub repository link.
           */
          repository: 'https://www.github.com/nuxt-themes/alpine'
        },
        /**
         * Toggle the navigation.
         */
        navigation: true, // possible value are : true | false
        /**
         * Footer position.
         *
         * @type {'left'|'center'|'right'}
         */
        alignment: 'center',
        /**
         * Footer message.
         *
         * Leave it empty to disable.
         */
        message: 'Follow me on'
      },
      /**
       * Icons to be added to Social Icons in footer.
       *
       * @studio-icon material-symbols:add-link
       */
      socials: {
        /**
         * Twitter handle
         * @example 'nuxt_js'
         * @studio-icon simple-icons:twitter
         */
        twitter: '',
        /**
         * Instagram handle
         * @example 'wearenuxt'
         * @studio-icon simple-icons:instagram
         */
        instagram: '',
        /**
         * GitHub path
         * @example 'nuxt-themes/alpine'
         * @studio-icon simple-icons:github
         */
        github: '',
        /**
         * GitHub path
         * @example 'nuxt'
         * @studio-icon simple-icons:facebook
         */
        facebook: '',
        /**
         * Medium handle
         * @example 'nuxt'
         * @studio-icon simple-icons:medium
         */
        medium: '',
        /**
         * Youtube handle
         * @example '@nuxtlabs'
         * @studio-icon simple-icons:youtube
         */
        youtube: ''
      },
      /**
       * Contact form configuration.
       *
       * @studio-icon ion:ios-paperplane
       */
      form: {
        /**
         * Success message.
         */
        successMessage: 'Message sent. Thank you!'
      }
    }
  }
})
