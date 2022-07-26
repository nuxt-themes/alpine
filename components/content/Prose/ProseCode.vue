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

const codeBlock = ref(null)

</script>

<template>
  <div ref="codeBlock" class="relative group min-h-min w-full prose-code prose-code:flex prose-code:flex-col prose-pre:py-7">
    <div v-if="codeBlock" class="absolute right-0 h-full flex flex-col">
      <p v-if="filename && codeBlock && codeBlock.clientHeight >= 120" class="transition mx-auto hover:opacity-0 text-primary-100 not-prose my-0" :class="{'mb-6 mr-4 md:mr-5 mt-4 md:mt-5': codeBlock.clientHeight >= 120}">
        {{ filename }}
      </p>
      <div class="grow" />
      <CopyButton :content="code" class="mr-4 md:mr-5 mb-4 md:mb-5" />
    </div>
    <slot />
  </div>
</template>
