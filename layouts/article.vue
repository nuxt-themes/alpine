<template>
  <Container>
    <Header />
    <nuxt-link :to="parentPath">
      <p class="mb-7">
        <Icon class="mr-2" name="mdi:arrow-left" /> Back
      </p>
    </nuxt-link>
    <h1 class="text-5xl font-semibold mb-4">
      {{ article.title }}
    </h1>
    <p>{{ formatDate(article.date) }}</p>
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
