<script setup lang="ts">
import type { PropType } from 'vue'
import type { Lang } from 'shiki-es'

const props = defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String as PropType<Lang>,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  }
})
</script>

<template>
  <div class="relative">
    <CopyButton :content="code" />
    <p v-if="filename" class="absolute transition hover:opacity-0 top-3 right-4 md:top-4 md:right-5 text-primary-100 not-prose my-0">
      {{ filename }}
    </p>
    <div class="w-full prose-code prose-code:flex prose-code:flex-col">
      <slot />
    </div>
  </div>
</template>
