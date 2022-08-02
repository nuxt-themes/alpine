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
  hero: {
    type: Boolean,
    default: false
  }
})

</script>

<template>
  <nuxt-link v-if="article._path && article.title" :to="article._path">
    <div class="flex flex-col h-80 md:h-[352px]" :class="{'md:h-52 lg:h-44 md:flex-row' : hero}">
      <img v-if="article.cover" class="object-cover w-full h-40 mb-5 md:h-44 rounded-xl" :class="{'md:h-full md:mb-0 md:mr-14 md:flex-none md:w-64 lg:w-96' : hero}" :src="article.cover">
      <div class="flex flex-col h-full">
        <h1 class="flex-none text-2xl font-semibold line-clamp-2 text-primary-900 dark:text-primary-100">
          {{ article.title }}
        </h1>
        <p class="flex-none mt-2 text-primary-800 dark:text-primary-200" :class="article.cover ? 'line-clamp-2' : 'line-clamp-4'">
          {{ article.description }}
        </p>
        <div class="grow" />
        <p class="flex-none text-sm line-clamp-1 text-primary-800 dark:text-primary-200">
          {{ formatDate(article.date) }}
        </p>
      </div>
    </div>
  </nuxt-link>
</template>
