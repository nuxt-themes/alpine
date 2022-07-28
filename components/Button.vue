<template>
  <button class="rounded-lg font-medium bg-primary-900 dark:bg-primary-100 text-primary-100 dark:text-primary-900 text-sm dm:text-base py-2 md:py-3 px-4 md:px-6" @click="onClick()">
    <slot />
  </button>
</template>

<script setup lang="ts">

defineProps({
  onClick: {
    type: Function,
    required: true
  }
})

</script>
