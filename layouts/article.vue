<template>
  <Container>
    <Header />
    <nuxt-link :to="parentPath">
      <p class="flex flex-row mt-10 mb-7 text-primary-900 dark:text-primary-100">
        <Icon class="mr-2" name="uil:arrow-left" /> Back
      </p>
    </nuxt-link>
    <h1 class="text-5xl font-semibold text-primary-900 dark:text-primary-100 mb-4">
      {{ article.title }}
    </h1>
    <p class="text-primary-700 dark:text-primary-400">
      {{ formatDate(article.date) }}
    </p>
    <main class="prose dark:prose-invert max-w-full">
      <slot />
    </main>
    <Footer />
  </Container>
</template>

<script setup lang="ts">
import { formatDate } from '../utils/index'

const route = useRoute()

const parentPath = computed(() => {
  const pathTabl = route.path.split('/')
  pathTabl.pop()
  return pathTabl.join('/')
})

// @ts-ignore
const { data: article } = await useAsyncData('article', () => {
  return queryContent(route.path).findOne()
})

</script>
