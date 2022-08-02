<script lang="ts" setup>
const { navigation } = useContent()
const theme = useTheme()

const hasFooter = computed(() => {
  return theme.value.footer
})

const placeItems = computed(() => {
  switch (theme.value.footer.position) {
    case 'left':
      return 'place-items-start'
    case 'center':
      return 'place-items-center'
    case 'right':
      return 'place-items-end'
    default:
      return 'place-items-center'
  }
})

const rowsNumber = computed(() => {
  return [theme.value.footer.navigation, theme.value.footer.title, theme.value.footer.socials, theme.value.footer.socials?.message.length].reduce((acc, val) => {
    return acc + (val ? 1 : 0)
  }, 0)
})
</script>

<template>
  <footer
    v-if="isFooter"
    class="grid h-32 grid-cols-1 py-6 mt-24 md:h-36 md:py-8"
    :class="[
      placeItems,
      `grid-row-${rowsNumber}`,
    ]"
  >
    <h1 v-if="theme.footer.title" class="text-3xl font-bold text-primary-900 dark:text-primary-100">
      Alpine.
    </h1>
    <div v-if="theme.footer.navigation" class="grid grid-flow-col my-4 gap-x-9 auto-cols-max">
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
    <p v-if="theme.footer.socials && theme.footer.socials.message" class="text-center text-primary-700 dark:text-primary-200">
      {{ theme.footer.socials.message }}
    </p>
    <div v-if="theme.footer.socials" class="grid grid-flow-col gap-x-9 auto-cols-max">
      <NuxtLink v-for="[icon, link] of Object.entries(theme.socials)" :key="icon" :to="link">
        <Icon v-if="theme.footer.socials.icons" :name="`uil:${icon}`" class="w-4 h-4" />
        <p v-else>
          {{ icon }}
        </p>
      </NuxtLink>
    </div>
  </footer>
</template>
