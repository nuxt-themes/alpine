<script setup lang="ts">

const theme = useTheme()

defineProps({
  padded: {
    type: Boolean,
    default: true
  }
})

useHead({
  meta: [
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})

useContentHead(theme.value)
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl">
    <AppLoadingBar />
    <Header v-if="$theme.value.header" />
    <slot />
    <Footer v-if="$theme.value.footer" />
  </div>
</template>
