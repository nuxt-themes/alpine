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
    class="relative"
  >
    <ColorModeSwitch class="absolute top-6 md:top-8" :class="{'right-0' : theme.header.position === 'left'}" />
    <div
      class="grid grid-cols-1 grid-rows-2 h-32 md:h-36 py-6 md:py-8 mb-6 md:mb-8"
      :class="{
        'place-items-start': theme.header.position === 'left',
        'place-items-center': theme.header.position === 'center',
        'place-items-end': theme.header.position === 'right'
      }"
    >
      <NuxtLink to="/" class="text-primary-700 dark:text-primary-200">
        <img class="dark-img" :src="theme.header.logo.logoDark">
        <img class="light-img" :src="theme.header.logo.logo">
      </NuxtLink>
      <div class="grid grid-flow-col gap-x-9 auto-cols-max mt-8">
        <NuxtLink
          v-for="link of navigation"
          :key="link._path"
          :to="link._path"
          active-class="font-bold"
          class="text-primary-700 dark:text-primary-200"
        >
          {{ link.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
  <div v-else />
</template>
