---
cover: /articles/design-tokens.webp
date: 2022-08-23
layout: article
---

# Customize Alpine

Leverage the `tokens.config.ts` to give your identity to Alpine.

Look at the [default tokens config](https://github.com/nuxt-themes/alpine/blob/main/tokens.config.ts) to check all the Alpine related Design Tokens.

Alpine is also powered by [@nuxt-themes/tokens](https://www.npmjs.com/package/@nuxt-themes/tokens), see the [package tokens.config.ts](https://unpkg.com/@nuxt-themes/tokens@latest/dist/tokens.config.ts).

You can configure all the theme tokens to change the apperance of Alpine by creating a `tokens.config.ts` in your project:

```ts
import { defineTheme } from 'pinceau'

export default defineTheme({
  alpine: {
    body: {
      // Update the background color in light & dark mode
      backgroundColor: {
        initial: '#f8fafc',
        dark: '#0f172a'
      }
    }
  }
})
```

If you are using [Nuxt Studio](https://nuxt.studio), you can use an UI to update the `token.config.ts` of your Alpine project:

[![design-tokens-studio.png](/design-tokens-studio.png)](https://nuxt.studio)
