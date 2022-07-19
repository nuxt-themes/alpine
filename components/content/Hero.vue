<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: null
  },
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
  <section v-if="title || $slots.title" class="not-prose">
    <div :class="image ? 'lg:flex' : ''" class="">
      <div :class="image ? 'shrink' : ''">
        <div class="text-3xl font-bold text-primary-900 dark:text-primary-100">
          <p v-if="title" class="!my-0">
            {{ title }}
          </p>
          <Markdown v-else :use="$slots.title" unwrap="p" />
        </div>
        <div v-if="description || $slots.description" class="mt-3 dark:prose-invert">
          <p v-if="description" class="!my-0">
            {{ description }}
          </p>
          <Markdown v-else :use="$slots.description" unwrap="p" />
        </div>
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
  <p v-else>
    :( a hero block must have a title !
  </p>
</template>
