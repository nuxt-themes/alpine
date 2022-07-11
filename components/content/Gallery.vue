<script setup lang="ts">
import type { PropType } from 'vue'

const galleryProps = defineProps({
  images: {
    type: Array as PropType<Array<string>>,
    default: null,
    required: true
  }
})
const galleryImage1 = ref(null)
const galleryImage2 = ref(null)
const galleryImage3 = ref(null)
onMounted(() => {
  if (!galleryProps.images) return
  if (!galleryProps.images[0]) return
  galleryImage1.value = galleryProps.images[0]
  if (!galleryProps.images[1]) return
  galleryImage2.value = galleryProps.images[1]
  if (!galleryProps.images[2]) return
  galleryImage3.value = galleryProps.images[2]
})
</script>

<template>
  <!-- <section v-if="images.length <= 3" class="not-prose">
    <Container :class="galleryContainerClass">
      <div v-for="(image, index) in images" :key="index">
        <img class="object-cover w-full rounded-xl" :class="galleryImageClass" :src="image" alt=":(" />
      </div>
    </Container>
  </section>
  <p v-else>:( a gallery block can not have more than 3 images !</p> -->
  <section v-if="images.length <= 3" class="not-prose">
    <Container>
      <div
        class="grid"
        :class="
          galleryImage2
            ? galleryImage3
              ? 'grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 h-[730px] gap-[32px] md:h-[444px] md:gap-[48px] lg:h-[176px] lg:gap-[72px]'
              : 'grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 h-[468px] gap-[24px] md:h-[198px] md:gap-[48px] lg:h-[201px] lg:gap-[92px]'
            : 'grid-cols-1 grid-rows-1 h-[222px] md:h-[295px] lg:h-[392px]'
        "
      >
        <img
          v-if="galleryImage1"
          class="object-cover w-full h-full rounded-xl"
          :src="galleryImage1"
          alt=":("
        />
        <img
          v-if="galleryImage2"
          class="object-cover w-full h-full rounded-xl"
          :src="galleryImage1"
          alt=":("
        />
        <img
          v-if="galleryImage3"
          class="object-cover w-full h-full md:col-span-2 lg:col-span-1 rounded-xl"
          :src="galleryImage1"
          alt=":("
        />
      </div>
    </Container>
  </section>
  <p v-else>:( a gallery block can not have more than 3 images !</p>
</template>
