<script setup lang="ts">
const props = defineProps({
  path: {
    type: String,
    default: 'articles'
  }
})

// @ts-ignore
const { data: _articles } = await useAsyncData('articles', async () => await queryContent(props.path).sort({ date: -1 }).where({ _path: { $ne: `/${props.path}` } }).find())

const articles = computed(() => _articles.value || [])
</script>

<template>
  <div v-if="articles?.length" class="articles-list">
    <div class="featured">
      <ArticlesListItem :article="articles[0]" :featured="true" />
    </div>
    <div class="layout">
      <ArticlesListItem v-for="(article, index) in articles.slice(1)" :key="index" :article="article" />
    </div>
  </div>
</template>

<style scoped lang="ts">
css({
  '.articles-list': {
    '@sm': {
      px: '{space.12}',
    },
    '@md': {
      px: 0,
    },
    '.featured': {
      my: '{space.12}',
      '@md': {
        my: '{space.8}',
      }
    },
    '.layout': {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      gap: '{space.12}',
      '@md': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '{space.8}',
      },
      '@lg': {
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      },
    }
  }
})
</style>
