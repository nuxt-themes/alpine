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
    { name: 'keywords', content: alpine.keywords }
  ]
})

useContentHead(alpine as any)
</script>

<template>
  <Container class="app-layout">
    <AppLoadingBar />
    <AppHeader v-if="alpine.header" />
    <slot />
    <AppFooter v-if="alpine.footer" />
  </Container>
</template>

<style lang="ts" scoped>
css({
  '.app-layout': {
    minWidth: '{size.xs}'
  }
})
</style>
