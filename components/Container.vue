<script setup lang="ts">
defineProps({
  padded: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div :class="useColorMode().value">
    <div class="h-full pb-0 mb-0">
      <div :class="[padded ? 'px-4 sm:px-6' : '']" class="max-w-sm mx-auto md:max-w-2xl lg:max-w-4xl">
        <slot />
      </div>
    </div>
  </div>
</template>
