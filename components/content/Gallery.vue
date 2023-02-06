<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  images: {
    type: Array as PropType<string[]>,
    default: () => []
  }
})
</script>

<template>
  <section class="gallery">
    <div
      class="layout"
    >
      <NuxtImg
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        :width="16"
        :height="9"
      />
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
      '@md': {
        '--cols': (props) => props.images.length < 2 ? props.images.length : 2
      },
      img: {
        objectFit: 'cover',
        width: '100%',
        aspectRatio: '16 / 9',
        borderRadius: '{radii.md}'
      }
    }
  }
})
</style>
