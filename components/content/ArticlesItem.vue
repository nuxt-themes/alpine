<script setup lang="ts">
// @ts-ignore
import { formatDate } from '../../utils/index.ts'

defineProps({
  article: { type: Object, default: null }
})
</script>

<template>
  <nuxt-link v-if="article && article._path && article.title" :to="article._path">
    <div class="flex flex-col h-96">
      <img v-if="article.cover" class="object-cover w-full h-44 rounded-xl" :src="article.cover">
      <div class="flex flex-col h-full mt-5">
        <h1 class="flex-none text-2xl font-semibold line-clamp-2">
          {{ article.title }}
        </h1>
        <p class="flex-none" :class="article.cover ? 'line-clamp-4' : 'line-clamp-8'">
          {{ article.description }}
        </p>
        <div class="grow" />
        <p class="flex-none text-sm line-clamp-1">
          {{ formatDate(article.date) }}
        </p>
      </div>
    </div>
  </nuxt-link>
</template>
