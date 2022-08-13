<script lang="ts" setup>
const { navigation } = useContent()
const theme = useTheme()

const placeItems = computed(() => {
  switch (theme.value.header.position) {
    case 'left':
      return 'items-start'
    case 'center':
      return 'items-center'
    case 'right':
      return 'items-end'
    case 'inline':
      return 'sm:flex-row justify-between'
    default:
      return 'items-start'
  }
})
</script>

<template>
  <header class="relative h-32 md:h-36 py-8 mb-6 md:mb-8 flex items-center justify-between">
    <ColorModeSwitch
      :class="[
        { 'absolute top-6 md:top-8': !(theme.header.position === 'inline') },
        { 'order-last self-start md:self-auto': theme.header.position === 'inline' },
        { 'right-0' : ['left', 'center'].includes(theme.header.position) }
      ]"
    />
    <div
      class="flex flex-col gap-y-[24px] md:gap-y-[32px] flex-1"
      :class="placeItems"
    >
      <NuxtLink v-if="theme.header.logo" to="/" class="text-primary-700 dark:text-primary-200">
        <img class="dark-img" :src="theme.header.logo.pathDark" :alt="theme.header.logo.alt">
        <img class="light-img" :src="theme.header.logo.path" :alt="theme.header.logo.alt">
      </NuxtLink>
      <ul class="flex h-full sm:justify-center gap-x-[32px]" :class="{ 'flex-1': theme.header.position }">
        <li
          v-for="link of navigation"
          :key="link._path"
          class="relative group"
        >
          <!-- underline -->
          <span class="absolute -bottom-1 w-0 h-0.5 bg-primary-700 dark:bg-primary-100 group-hover:w-full transition-all duration-200 ease-in-out" />
          <NuxtLink
            :to="link._path"
            active-class="font-bold"
            class="text-primary-700 dark:text-primary-200"
          >
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>
