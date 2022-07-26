<template>
  <button class="flex flext-col mx-auto my-auto text-primary-100 not-prose bg-zinc-600 rounded-lg py-1 px-3" @click="copyCode">
    <Icon v-if="state === 'copied'" name="uil:check" class="w-5 h-5 mr-1 mt-1" />
    <p>
      {{ state }}
    </p>
  </button>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const props = defineProps({
  content: {
    type: String,
    default: ''
  }
})

const state = ref('copy')
const { copy: copyToClipboard } = useClipboard()

const copyCode = () => {
  copyToClipboard(props.content)
    .then(() => {
      state.value = 'copied'

      setTimeout(() => {
        state.value = 'copy'
      }, 1500)
    })
    .catch(() => {
      // eslint-disable-next-line no-console
      console.warn("Couldn't copy to clipboard!")
    })
}

</script>
