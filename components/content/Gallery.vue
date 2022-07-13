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
        'md:grid-col-2 md:grid-row-2 lg:grid-cols-3': images.length === 3,
        'md:grid-cols-2': images.length === 2
      }"
    >
      <img
        v-for="(image, index) in images"
        :key="index"
        class="object-cover w-full h-56 rounded-xl"
        :src="image"
        :class="[{ 'row-span-1 md:col-span-2 lg:col-span-1': images.length === 3 && index === images.length - 1 },
                 { 'md:h-72 lg:h-96' : images.length === 1 },
                 { 'md:h-48 lg:h-52' : images.length === 2 },
                 { 'md:h-48 lg:h-44' : images.length === 3 }]"
      >
    </div>
  </section>
</template>
