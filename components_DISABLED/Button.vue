<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'submit'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button :type="type" :disabled="disabled">
    <slot />
  </button>
</template>

<style scoped lang="ts">
css({
  button: {
    backgroundColor: '{color.gray.900}',
    color: '{color.gray.100}',
    fontSize: '{text.sm.fontSize}',
    lineHeight: '{text.sm.lineHeight}',
    fontWeight: '{fontWeight.medium}',
    py: '{space.2}',
    px: '{space.4}',
    borderRadius: '{radii.md}',
    '@md': {
      fontSize: '{text.base.fontSize}',
      lineHeight: '{text.base.lineHeight}',
      py: '{space.3}',
      px: '{space.6}',
    },
    '@dark': {
      backgroundColor: '{color.gray.100}',
      color: '{color.gray.900}',
    },
    '&:disabled': {
      cursor: 'not-allowed',
    }
  }
})
</style>
