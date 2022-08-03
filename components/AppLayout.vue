<script setup lang="ts">
defineProps({
  padded: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="max-w-sm mx-auto md:max-w-2xl lg:max-w-4xl">
    <AppLoadingBar />
    <Header />
    <slot />
    <Footer v-if="$theme.value.footer" />
  </div>
</template>
