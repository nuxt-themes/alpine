<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: null
  },
  image: {
    type: String,
    default: null
  },
  imagePosition: {
    type: String,
    default: 'right'
  }
})
</script>

<template>
  <section v-if="title || $slots.title" class="hero">
    <div class="layout">
      <div class="content">
        <div class="title">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </div>
        <div v-if="description || $slots.description" class="description">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </div>
      </div>
      <img
        v-if="image"
        :class="[imagePosition]"
        :src="image"
        alt=":("
      >
    </div>
  </section>
  <p v-else>
    :( a hero block must have a title !
  </p>
</template>

<style scoped lang="ts">
css({
  '.hero': {
    '.layout': {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      gap: '{space.8}',
      '@lg': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      },
      '.title': {
        fontSize: '{text.4xl.fontSize}',
        lineHeight: '{text.4xl.lineHeight}',
        fontWeight: '{fontWeight.bold}',
      },
      '.description': {
        marginTop: '{space.3}',
        fontSize: '{text.xl.fontSize}',
        lineHeight: '{text.xl.lineHeight}',
      },
      img: {
        width: '100%',
        aspectRatio: '16 / 9',
        objectFit: 'cover',
        borderRadius: '{radii.md}',
        '&.left': {
          order: -1
        }
      },
    }
  }
})
</style>
