/** @type {import('tailwindcss').Config} */
import { $dt } from '@nuxtjs/design-tokens'
import typographyPlugin from '@tailwindcss/typography'
import aspectRatioPlugin from '@tailwindcss/aspect-ratio'
import lineClampPlugin from '@tailwindcss/line-clamp'

export default {
  darkMode: 'class',
  plugins: [
    typographyPlugin,
    aspectRatioPlugin,
    lineClampPlugin
  ],
  content: [
    'elements/**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Customize the feeling of your site
        primary: $dt('colors.primary'),
        secondary: $dt('colors.secondary')
      },
      fontFamily: {
        sans: 'Inter, ui-sans-serif, system-ui, -apple-system, Arial, Roboto, sans-serif'
      },
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': $dt('colors.primary.700'),
            '--tw-prose-headings': $dt('colors.primary.900'),
            '--tw-prose-lead': $dt('colors.primary.600'),
            '--tw-prose-links': $dt('colors.primary.900'),
            '--tw-prose-bold': $dt('colors.primary.900'),
            '--tw-prose-counters': $dt('colors.primary.500'),
            '--tw-prose-bullets': $dt('colors.primary.300'),
            '--tw-prose-hr': $dt('colors.primary.200'),
            '--tw-prose-quotes': $dt('colors.primary.900'),
            '--tw-prose-quote-borders': $dt('colors.primary.200'),
            '--tw-prose-captions': $dt('colors.primary.500'),
            '--tw-prose-code': $dt('colors.primary.900'),
            '--tw-prose-pre-code': $dt('colors.primary.200'),
            '--tw-prose-pre-bg': $dt('colors.primary.800'),
            '--tw-prose-th-borders': $dt('colors.primary.300'),
            '--tw-prose-td-borders': $dt('colors.primary.200'),
            '--tw-prose-invert-body': $dt('colors.primary.300'),
            '--tw-prose-invert-headings': $dt('colors.white'),
            '--tw-prose-invert-lead': $dt('colors.primary.400'),
            '--tw-prose-invert-links': $dt('colors.white'),
            '--tw-prose-invert-bold': $dt('colors.white'),
            '--tw-prose-invert-counters': $dt('colors.primary.400'),
            '--tw-prose-invert-bullets': $dt('colors.primary.600'),
            '--tw-prose-invert-hr': $dt('colors.primary.700'),
            '--tw-prose-invert-quotes': $dt('colors.primary.100'),
            '--tw-prose-invert-quote-borders': $dt('colors.primary.700'),
            '--tw-prose-invert-captions': $dt('colors.primary.400'),
            '--tw-prose-invert-code': $dt('colors.white'),
            '--tw-prose-invert-pre-code': $dt('colors.primary.300'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': $dt('colors.primary.600'),
            '--tw-prose-invert-td-borders': $dt('colors.primary.700')
          }
        }
      })
    }
  }
}
