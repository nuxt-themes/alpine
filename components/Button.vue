<script setup lang="ts">
defineProps({
  onClick: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <button @click="onClick()">
    <slot />
  </button>
</template>

<style scoped lang="ts">
css({
  button: {
    backgroundColor: '{colors.gray.900}',
    color: '{colors.gray.100}',
    fontSize: '{text.sm.fontSize}',
    lineHeight: '{text.sm.lineHeight}',
    fontWeight: '{fontWeights.medium}',
    py: '{space.2}',
    px: '{space.4}',
    borderRadius: '{radii.md}',
    '@mq.md': {
      fontSize: '{text.base.fontSize}',
      lineHeight: '{text.base.lineHeight}',
      py: '{space.3}',
      px: '{space.6}',
    },
    '@dark': {
      backgroundColor: '{colors.gray.100}',
      color: '{colors.gray.900}',
    }
  }
})
</style>
