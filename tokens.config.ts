import { defineTokens, palette } from '@nuxtjs/design-tokens'

export default defineTokens({
  colors: {
    white: {
      value: '#FFFFFF'
    },
    primary: {
      DEFAULT: { value: '#78716c' },
      50: { value: '#fafaf9' },
      100: { value: '#f5f5f4' },
      200: { value: '#e7e5e4' },
      300: { value: '#d6d3d1' },
      400: { value: '#a8a29e' },
      500: { value: '' },
      600: { value: '#57534e' },
      700: { value: '#44403c' },
      800: { value: '#292524' },
      900: { value: '#1c1917' }
    },
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
