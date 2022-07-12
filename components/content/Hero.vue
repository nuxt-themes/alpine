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
    defaut: 'right'
  }
})
</script>

<template>
  <section v-if="title || $slots.title" class="not-prose">
    <Container :class="image ? 'grid lg:grid-flow-col-dense lg:justify-between' : ''">
      <div :class="image ? 'lg:max-w-[420px] shrink' : ''">
        <div class="text-3xl font-bold text-gray-900 dark:text-gray-100">
          <p v-if="title" class="!my-0">
            {{ title }}
          </p>
          <Markdown
            v-else
            :use="$slots.title"
            unwrap="p"
          />
        </div>
        <div
          v-if="description || $slots.description"
          class="mt-3 dark:prose-invert"
        >
          <p v-if="description" class="!my-0">
            {{ description }}
          </p>
          <Markdown
            v-else
            :use="$slots.description"
            unwrap="p"
          />
        </div>
      </div>
      <img
        v-if="image"
        class="max-h-[178px] object-cover w-full rounded-xl lg:mt-0 md:max-h-[274px] lg:h-[192px] lg:w-[388px]"
        :class="layout === 'left' ? 'order-first lg:mr-[56px] mb-8' : 'lg:ml-[56px] mt-8'"
        :src="image"
        alt=":("
      >
    </Container>
  </section>
  <p v-else>
    :( a hero block must have a title !
  </p>
</template>
