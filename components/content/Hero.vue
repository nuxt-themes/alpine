<script setup lang="ts">
defineProps({
  image: {
    type: String,
    default: null
  },
  layout: {
    type: String,
    default: 'right'
  }
})
</script>

<template>
  <section class="not-prose">
    <div class="flex flex-col lg:flex-row">
      <div :class="image ? 'grow' : ''">
        <h1 class="text-3xl font-bold text-primary-900 dark:text-primary-100">
          <span v-if="$slots.title"><Markdown :use="$slots.title" unwrap="p" /></span>
          <span v-else>Default title</span>
        </h1>
        <p class="mt-3 dark:prose-invert">
          <Markdown v-if="$slots.description" :use="$slots.description" unwrap="p" />
          <span v-else>Default description</span>
        </p>
      </div>
      <img
        v-if="image"
        class="lg:flex-none max-h-44 object-cover w-full rounded-xl lg:mt-0 md:max-h-72 lg:h-48 lg:w-96"
        :class="
          layout === 'left'
            ? 'order-first lg:mr-14 mb-8'
            : 'lg:ml-14 mt-8'
        "
        :src="image"
        alt=":("
      >
    </div>
  </section>
</template>
