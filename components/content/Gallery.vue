<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  images: {
    type: Array as PropType<string[]>,
    default: () => [],
    validator: (value: string[]) => {
      return value.length <= 3
    }
  }
})
</script>

<template>
  <section class="not-prose">
    <div
      class="grid gap-8"
      :class="{
        'lg:grid-cols-3': images.length === 3,
        'lg:grid-cols-2': images.length === 2
      }"
    >
      <img
        v-for="(image, index) in images"
        :key="index"
        class="object-cover aspect-[4/3] w-full h-full rounded-xl"
        :src="image"
        :class="{ 'md:col-span-2 lg:col-span-1': images.length === 3 && index === images.length - 1 }"
      >
    </div>
  </section>
</template>
