<script setup lang="ts">
defineProps({
  padded: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>
  <div
    :class="[padded ? 'px-4 sm:px-6' : '']"
    class="mx-auto  py-[36px]"
  >
    <slot />
  </div>
</template>
