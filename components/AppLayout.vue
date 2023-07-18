<script setup lang="ts">
const alpine = useAppConfig().alpine

// defineProps({
//   padded: {
//     type: Boolean,
//     default: true
//   }
// })

useHead({
  meta: [
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})

useContentHead(alpine as any)
</script>

<template>
  <div>
    <!-- <Container class="app-layout"> -->
    <AppLoadingBar />
    <!-- <AppHeader v-if="alpine.header" /> -->
    <slot />
    <!-- <AppFooter v-if="alpine.footer" /> -->
  <!-- </Container> -->
  </div>
</template>

<!-- <style lang="ts" scoped>
css({
  '.app-layout': {
    minWidth: '{size.xs}'
  }
})
</style> -->