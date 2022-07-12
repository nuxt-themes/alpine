<script setup lang="ts">
defineProps({
  padded: {
    type: Boolean,
    required: false,
    default: true
  }
})
</script>

<template>
  <div :class="[padded ? 'px-4 sm:px-6' : '']" class="lg:max-w-4xl mx-auto">
    <slot />
  </div>
</template>
