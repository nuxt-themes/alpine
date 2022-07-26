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

onMounted(() => {
  console.log(codeBlock.value.clientHeight)
})

</script>

<template>
  <div ref="codeBlock" class="relative min-h-min w-full prose-code prose-code:flex prose-code:flex-col prose-pre:pr-40 prose-code:pr-40 prose-code:break-words prose-pre:break-words prose-code:bg-red-200">
    <div v-if="codeBlock" class="absolute right-0 flex flex-col bg-red-400" :style="`height: ${codeBlock.clientHeight}px;`">
      <p v-if="filename" class="transition mx-auto hover:opacity-0 text-primary-100 not-prose my-0" :class="{'mb-6 mr-4 md:mr-5 mt-4 md:mt-5': codeBlock.clientHeight >= 120}">
        {{ filename }}
      </p>
      <div class="grow bg-green-400" />
      <CopyButton :content="code" class="mr-4 md:mr-5 mb-4 md:mb-5" />
    </div>
    <slot />
  </div>
</template>
