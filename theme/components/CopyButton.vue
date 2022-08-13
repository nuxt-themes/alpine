<template>
  <button class="scale-0 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 flex flex-col mx-auto my-auto text-primary-100 not-prose bg-zinc-600 rounded-lg pt-1 pb-1.5 px-3" @click="copyCode">
    <Icon v-if="state === 'copied'" name="uil:check" class="w-4 h-4 mr-1 !text-primary-100 !dark:text-primary-100 my-0" />
    <p>
      {{ state }}
    </p>
  </button>
</template>

<script setup lang="ts">
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
