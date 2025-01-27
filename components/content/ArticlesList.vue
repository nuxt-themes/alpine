<script setup lang="ts">
import { withTrailingSlash } from 'ufo'
import { ref, computed } from 'vue'

const props = defineProps({
  path: {
    type: String,
    default: 'articles'
  }
})

// @ts-ignore
const { data: _articles } = await useAsyncData(props.path, async () => await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find())

const articles = computed(() => _articles.value || [])

// Get the unique years from the articles
const years = computed(() => {
  const yearsSet = new Set(articles.value.map(article => new Date(article.date).getFullYear()))
  return Array.from(yearsSet).sort((a, b) => b - a)
})

const currentYear = ref(years.value[0])

const filteredArticles = computed(() => {
  return articles.value.filter(article => new Date(article.date).getFullYear() === currentYear.value)
})

const showNextYear = () => {
  const currentIndex = years.value.indexOf(currentYear.value)
  if (currentIndex > 0) {
    currentYear.value = years.value[currentIndex - 1]
  }
}

const showPreviousYear = () => {
  const currentIndex = years.value.indexOf(currentYear.value)
  if (currentIndex < years.value.length - 1) {
    currentYear.value = years.value[currentIndex + 1]
  }
}
</script>

<template>
  <div>
    <div v-if="filteredArticles?.length" class="articles-list">
      <div class="featured">
        <ArticlesListItem :article="filteredArticles[0]" :featured="true" />
      </div>
      <div class="layout">
        <ArticlesListItem v-for="(article, index) in filteredArticles.slice(1)" :key="index" :article="article" />
      </div>
    </div>
    <div v-else class="tour">
      <p>Seems like there are no articles for {{ currentYear }}.</p>
    </div>

    <div class="navigation-buttons">
      <button @click="showPreviousYear" :disabled="currentYear === years[years.length - 1]">Previous Year</button>
      <button @click="showNextYear" :disabled="currentYear === years[0]">Next Year</button>
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
  },
  '.tour': {
    minHeight: '30vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '.navigation-buttons': {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.5,
      }
    }
  }
})
</style>