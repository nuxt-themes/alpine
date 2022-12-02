<script setup lang="ts">
const alpine = useAppConfig().alpine

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

useContentHead(alpine)
</script>

<template>
  <!-- TODO: move AppContainer to Elements, add tokens -->
  <AppContainer>
    <AppLoadingBar />
    <AppHeader v-if="alpine.header" />
    <slot />
    <AppFooter v-if="alpine.footer" />
  </AppContainer>
</template>
