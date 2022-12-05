import { defineTheme } from 'pinceau'
import theme from '@nuxt-themes/tokens/tokens'

export default defineTheme({
  utils: {
    lineClamp: lines => ({
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': lines
    }),
    text: size => ({
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
    primary: theme.color.yellow,
    // primary: {
    //   DEFAULT: { value: '#78716c' },
    //   50: { value: '#ffffff' },
    //   100: { value: '#ffffff' },
    //   200: { value: '#e7e5e4' },
    //   300: { value: '#d6d3d1' },
    //   400: { value: '#a8a29e' },
    //   500: { value: '' },
    //   600: { value: '#57534e' },
    //   700: { value: '#44403c' },
    //   800: { value: '#292524' },
    //   900: { value: '#1c1917' }
    // },
    secondary: {
      DEFAULT: { value: '#78716c' },
      50: { value: '#fafaf9' },
      100: { value: '#f5f5f4' }, // background light
      200: { value: '#e7e5e4' },
      300: { value: '#d6d3d1' },
      400: { value: '#a8a29e' },
      500: { value: '' },
      600: { value: '#57534e' },
      700: { value: '#44403c' },
      800: { value: '#292524' },
      900: { value: '#0c0c0d' } // background dark
    }
  }
})
