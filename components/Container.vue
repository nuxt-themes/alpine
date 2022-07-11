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
    :class="[padded ? 'sm:mx-6 mx-4' : '']"
    class="mx-auto  py-[36px]"
  >
    <slot />
  </div>
</template>
