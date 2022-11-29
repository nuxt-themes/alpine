<script lang="ts" setup>
const alpine = useAppConfig().alpine
</script>

<template>
  <header :class="alpine.header.position">
    <div class="logo">
      <NuxtLink v-if="alpine.header.logo" to="/">
        <img class="dark-img" :src="alpine.header.logo.pathDark" :alt="alpine.header.logo.alt">
        <img class="light-img" :src="alpine.header.logo.path" :alt="alpine.header.logo.alt">
      </NuxtLink>
      <NuxtLink v-else to="/" class="fallback">
        {{ alpine.header.title || alpine.title }}
      </NuxtLink>
    </div>

    <div class="main-nav">
      <MainNav />
    </div>
  </header>
</template>

<style scoped lang="ts">
css({
  header: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
    alignItems: 'center',
    gap: '{space.4}',
    py: '{space.16}',
    '.logo': {
      display: 'flex',
      gridColumn: 'span 4 / span 4',
      '@mq.sm': {
        '.center &&': {
          gridColumn: 'span 12 / span 12',
          justifyContent: 'center',
        },
        '.right &&': {
          justifyContent: 'flex-end',
          order: 2,
        },
      },
      '.fallback': {
        fontSize: '{text.2xl.fontSize}',
        lineHeight: '{text.2xl.lineHeight}',
        fontWeight: '{fontWeights.semibold}'
      }
    },
    '.main-nav': {
      // TODO: add mobile menu
      display: 'none',
      '@mq.sm': {
        display: 'flex',
        gridColumn: 'span 8 / span 8',
        '.center &&': {
          gridColumn: 'span 12 / span 12',
          justifyContent: 'center',
        },
        '.right &&': {
          justifyContent: 'flex-start',
        },
        '.left &&': {
          justifyContent: 'flex-end',
        },
      }
    },
  }
})
</style>
