<template>
  <div>
    <nuxt-link :to="parentPath">
      <div class="flex flex-row mt-10 mb-7">
        <Icon class="mr-2" name="uil:arrow-left" />
        <p class="text-primary-900 dark:text-primary-100">
          Back
        </p>
      </div>
    </nuxt-link>
    <h1 v-if="page?.title" class="mb-4 text-5xl font-semibold text-primary-900 dark:text-primary-100">
      {{ page.title }}
    </h1>
    <p v-if="page?.date" class="text-primary-700 dark:text-primary-400">
      {{ formatDate(page.date) }}
    </p>
    <main class="max-w-full prose dark:prose-invert">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const parentPath = computed(
  () => {
    const pathTabl = route.path.split('/')
    pathTabl.pop()
    return pathTabl.join('/')
  }
)

const { page } = useContent()
</script>
