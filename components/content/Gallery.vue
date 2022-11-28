<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  images: {
    type: Array as PropType<string[]>,
    default: () => [],
    validator: (value: string[]) => {
      return value.length <= 3
    }
  }
})
</script>

<template>
  <section class="not-proseee gallery">
    <div
      class="layout"
    >
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
      >
    </div>
  </section>
</template>

<style scoped lang="ts">
css({
  '.gallery': {
    '.layout': {
      display: 'grid',
      gap: '{space.8}',
      my: '{space.16}',
      '--cols': 1,
      gridTemplateColumns: 'repeat(var(--cols), minmax(0, 1fr))',
      '@mq.md': {
        '--cols': (props) => props.images.length < 2 ? props.images.length : 2
      },
      '@mq.lg': {
        '--cols': (props) => props.images.length < 3 ? props.images.length : 3,
      },
      img: {
        objectFit: 'cover',
        width: '100%',
        // TODO: add image ratio
        height: '{space.56}',
        borderRadius: '{radii.xl}'
      }
    }
  }
})
</style>
