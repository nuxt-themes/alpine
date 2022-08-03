<script lang="ts" setup>
const { navigation } = useContent()
const theme = unref(useTheme())

const placeItems = computed(() => {
  switch (theme.header.position) {
    case 'left':
      return 'place-items-start'
    case 'center':
      return 'place-items-center'
    case 'right':
      return 'place-items-end'
    default:
      return 'place-items-start'
  }
})
</script>

<template>
  <header
    v-if="theme.header"
    class="relative"
  >
    <ColorModeSwitch class="absolute top-6 md:top-8" :class="{'right-0' : theme.header.position === 'left'}" />
    <div
      class="grid h-32 grid-cols-1 grid-rows-2 py-6 mb-6 md:h-36 md:py-8 md:mb-8"
      :class="placeItems"
    >
      <NuxtLink v-if="theme.header.logo" to="/" class="text-primary-700 dark:text-primary-200">
        <img class="dark-img" :src="theme.header.logo.pathDark" :alt="theme.header.logo.alt">
        <img class="light-img" :src="theme.header.logo.path" :alt="theme.header.logo.alt">
      </NuxtLink>
      <div class="grid grid-flow-col mt-8 gap-x-9 auto-cols-max">
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
  </header>
</template>
