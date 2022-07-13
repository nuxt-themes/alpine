<script lang="ts" setup>
const { navigation } = useContent()
const theme = useTheme()
</script>

<template>
  <div
    v-if="
      theme.header.position &&
        (theme.header.position === 'left' ||
          theme.header.position === 'center' ||
          theme.header.position === 'right')
    "
    class="grid grid-cols-1 grid-rows-2 h-32 md:h-36 py-6 md:py-8 mb-6 md:mb-8"
    :class="{
      'place-items-start': theme.header.position === 'left',
      'place-items-center': theme.header.position === 'center',
      'place-items-end': theme.header.position === 'right'
    }"
  >
    <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
      Alpine.
    </h1>
    <div class="grid grid-flow-col gap-x-9 auto-cols-max mt-8">
      <NuxtLink
        v-for="link of navigation"
        :key="link._path"
        :to="link._path"
        active-class="font-bold"
        class="text-gray-700 dark:text-gray-200"
      >
        {{ link.navTitle || link.title }}
      </NuxtLink>
    </div>
  </div>
  <div v-else />
</template>
