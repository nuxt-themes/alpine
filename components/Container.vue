<script setup lang="ts">
defineProps({
  padded: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div :class="[padded ? 'px-4 sm:px-6' : '']" class="max-w-sm mx-auto md:max-w-3xl lg:max-w-4xl">
    <slot />
  </div>
</template>
