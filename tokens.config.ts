import { defineTheme } from 'pinceau'
import theme from '@nuxt-themes/tokens/tokens'

export default defineTheme({
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
    primary: theme.color.yellow
  }
})
