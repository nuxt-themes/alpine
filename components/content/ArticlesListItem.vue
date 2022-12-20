<script setup lang="ts">
type Article = {
  _path: string
  title: string
  date: string
  description: string
}

defineProps({
  article: {
    type: Object,
    required: true,
    validator: (value: Article) => {
      if (value?._path && value.title) { return true }
      return false
    }
  },
  featured: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <article v-if="article._path && article.title" :class="{ 'featured': featured }">
    <NuxtLink :to="article._path">
      <img v-if="article.cover" :src="article.cover">
    </NuxtLink>

    <div class="content">
      <NuxtLink :to="article._path" class="headline">
        <h1>
          {{ article.title }}
        </h1>
      </NuxtLink>

      <p class="description">
        {{ article.description }}
      </p>
      <time>
        {{ formatDate(article.date) }}
      </time>
    </div>
  </article>
</template>

<style scoped lang="ts">
css({
  article: {
    display: 'flex',
    flexDirection: 'column',
    gap: '{space.4}',
    '&.featured': {
      '@md': {
        flexDirection: 'row',
        gap: '{space.8}',
      }
    },
    img: {
      aspectRatio: '16 / 9',
      objectFit: 'cover',
      borderRadius: '{radii.md}',
    },
    '.content': {
      display: 'flex',
      flexDirection: 'column',
      '.headline': {
        text: '2xl',
        marginBottom: '{space.2}',
        fontWeight: '{fontWeight.semibold}',
        lineClamp: 2,
        '.featured &&': {
          text: '4xl',
          lineClamp: 3,
        },
      },
      '.description': {
        marginBottom: '{space.4}',
        lineClamp: 2,
        '.featured &&': {
          lineClamp: 4,
        }
      },
      time: {
        text: 'sm',
        // TODO: add secondary color token
        color: '{color.gray.500}',
        '@dark': {
          color: '{color.gray.500}',
        }
      }
    },
  }
})
</style>
