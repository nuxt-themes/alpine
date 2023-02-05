import theme from '@nuxt-themes/tokens/config'
import { defineTheme } from 'pinceau'

export default defineTheme({
  alpine: {
    $schema: {
      title: 'All the configurable tokens from Alpine.',
      tags: [
        '@studio-icon carbon:blog'
      ]
    },
    backdrop: {
      backgroundColor: {
        initial: '#f4f4f5b3', // TODO: rgba({color.gray.100}, 0.7)
        dark: '#18181bb3' // TODO: rgba({color.gray.900}, 0.7)
      }
    },
    readableLine: '68ch'
  },
  elements: {
    container: {
      maxWidth: '64rem',
      padding: {
        mobile: '{space.6}',
        xs: '{space.8}',
        sm: '{space.12}',
        md: '{space.16}'
      }
    }
  },
  color: {
    white: '#FFFFFF',
    // @ts-ignore
    primary: theme.color.lightblue
  },
  prose: {
    p: {
      fontSize: '18px'
    },
  }
})
