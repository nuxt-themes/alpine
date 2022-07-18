<template>
  <div>
    <nuxt-link v-if="articles[0] && articles[0]._path && articles[0].title" :to="articles[0]._path">
      <div class="flex bg-red-400 h-96 ">
        <img v-if="articles[0].cover" class="object-cover w-full h-44 rounded-xl" :src="articles[0].cover">
        <div class="flex flex-col h-full mt-5">
          <h1 class="flex-none text-2xl font-semibold line-clamp-2">
            {{ articles[0].title }}
          </h1>
          <p class="flex-none" :class="articles[0].cover ? 'line-clamp-4' : 'line-clamp-8'">
            {{ articles[0].description }}
          </p>
          <div class="grow" />
          <p class="flex-none text-sm line-clamp-1">
            {{ formatDate(articles[0].date) }}
          </p>
        </div>
      </div>
    </nuxt-link>
    <div class="grid grid-cols-1md:grid-cols-2 lg:grid-cols-3 gap-14">
      <div v-for="(article, index) in articles.slice(1)" :key="index">
        <ArticlesItem :article="article" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { formatDate } from '../../utils/index.ts'

const props = defineProps({
  path: {
    type: String,
    default: 'articles'
  }
})

const { data: articles } = useAsyncData('articles', () => {
  return queryContent(props.path).sort({ date: -1 }).where({ _path: { $ne: `/${props.path}` } }).find()
})

</script>
