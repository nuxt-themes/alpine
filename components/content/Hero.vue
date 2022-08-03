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
          <Markdown :use="$slots.title" unwrap="p">
            Default title
          </Markdown>
        </h1>
        <p class="mt-3">
          <Markdown :use="$slots.description" unwrap="p">
            Default description
          </Markdown>
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

<style lang="postcss" scoped>
.not-prose :deep(a) {
  @apply underline;
}
</style>
