import { defineTheme } from 'pinceau'
import theme from '@nuxt-themes/tokens/tokens'

export default defineTheme({
  alpine: {
    backdrop: {
      backgroundColor: {
        light: '#f4f4f5b3', // TODO: rgba({color.gray.100}, 0.7)
        dark: '#18181bb3' // TODO: rgba({color.gray.900}, 0.7)
      }
    }
  },
  utils: {
    lineClamp: (lines: any) => ({
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': lines
    }),
    text: (size: any) => ({
      fontSize: `{text.${size}.fontSize}`,
      lineHeight: `{text.${size}.lineHeight}`
    })
  },
  container: {
    maxWidth: '64rem',
    padding: {
      mobile: '{space.4}',
      sm: '{space.6}'
    }
  },
  color: {
    white: {
      value: '#FFFFFF'
    },
    primary: theme.color.lightblue
  }
})
