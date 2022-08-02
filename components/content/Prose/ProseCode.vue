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
  <div class="group relative flex items-center w-full min-h-[5rem] mb-4 overflow-hidden rounded-md bg-primary-900 prose-pre:my-0 prose-code:flex prose-code:flex-col prose-pre:bg-transparent">
    <slot />
    <span v-if="filename" class="absolute text-xs transition top-2 right-2 hover:opacity-0 text-primary-100">
      {{ filename }}
    </span>
    <CopyButton :content="code" class="absolute text-xs bottom-2 right-2 h-min" />
  </div>
</template>
