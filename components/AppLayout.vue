<script setup lang="ts">
defineProps({
  padded: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="max-w-sm px-4 mx-auto sm:px-0 md:max-w-2xl lg:max-w-4xl">
    <AppLoadingBar />
    <Header v-if="$theme.value.header" />
    <slot />
    <Footer v-if="$theme.value.footer" />
  </div>
</template>
