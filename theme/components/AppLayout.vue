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
  <div class="px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl">
    <AppLoadingBar />
    <AppHeader v-if="alpine.header" />
    <slot />
    <AppFooter v-if="alpine.footer" />
  </div>
</template>
