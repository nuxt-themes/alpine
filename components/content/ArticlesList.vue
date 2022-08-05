<template>
  <div v-if="articles?.length">
    <div class="mt-8 mb-16">
      <ArticlesItem :article="articles[0]" :hero="true" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
      <div v-for="(article, index) in articles.slice(1)" :key="index">
        <ArticlesItem :article="article" />
      </div>
    </div>
  </div>
  <div v-else class="text-primary-700 dark:text-primary-200">
    <div class="h-screen text-center">
      <div class="flex justify-center">
        <Icon name="uil:sad-squint" class="mr-1" />
        <p>
          No articles found.
        </p>
      </div>
      <br>
      <p>
        Please put somme articles in the article folder or pass their path with the 'path' props !
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  path: {
    type: String,
    default: 'articles'
  }
})

// @ts-ignore
const { data: _articles } = await useAsyncData(
  'articles', async () => await queryContent(props.path)
    .sort({ date: -1 })
    .where({ _path: { $ne: `/${props.path}` } })
    .find()
)

const articles = computed(
  () => _articles.value || []
)
</script>
