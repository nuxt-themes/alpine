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
  <section class="not-prose my-[72px]">
    <ul
      class="grid gap-y-8 grid justify-between w-full grid-cols-1"
      :class="[
        { 'md:gap-x-[92px] md:grid-cols-2': images.length === 2 },
        { 'gap-x-8 xl:gap-x-[72px] md:grid-cols-3': images.length === 3 },
      ]"
    >
      <li
        v-for="(image, index) in images"
        :key="index"
      >
        <img
          class="object-cover w-full rounded-xl"
          :src="image"
          :class="[images.length > 1 ? 'max-w-[385px] h-[200px]' : 'h-[222px]']"
        >
      </li>
    </ul>
  </section>
</template>
