<template>
  <article>
    <!-- TODO: could be refactored as a transparent ButtonLink -->
    <NuxtLink :to="parentPath">
      <div class="flex flex-row mt-10 mb-8 lg:mb-7 items-center">
        <Icon class="mr-2" name="uil:arrow-left" />
        <p class="text-primary-900 dark:text-primary-100">
          Back
        </p>
      </div>
    </NuxtLink>
    <h1 v-if="page?.title" class="mb-4 text-5xl font-semibold text-primary-900 dark:text-primary-100">
      {{ page.title }}
    </h1>
    <p v-if="page?.date" class="text-primary-700 dark:text-primary-400">
      {{ formatDate(page.date) }}
    </p>
    <main class="max-w-full prose dark:prose-invert">
      <slot />
    </main>
  </article>
</template>

<script setup lang="ts">
const { page } = useContent()
const route = useRoute()

const parentPath = computed(
  () => {
    const pathTabl = route.path.split('/')
    pathTabl.pop()
    return pathTabl.join('/')
  }
)

</script>
