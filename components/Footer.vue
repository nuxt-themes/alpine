<script lang="ts" setup>
const { navigation } = useContent()
const theme = useTheme()

const placeItems = computed(() => {
  switch (theme.value.footer.position) {
    case 'left':
      return { grid: 'place-items-start', icons: 'items-start' }
    case 'center':
      return { grid: 'place-items-center', icons: 'items-center' }
    case 'right':
      return { grid: 'place-items-end', icons: 'items-end' }
    default:
      return { grid: 'place-items-center', icons: 'items-center' }
  }
})

const rowsNumber = computed(() => {
  const footer = theme.value.footer
  return [footer.navigation, footer.title, footer.socials, footer.socials?.message.length].reduce((acc, val) => {
    return acc + (val ? 1 : 0)
  }, 0)
})
</script>

<template>
  <footer
    class="grid min-h-32 grid-cols-1 mt-24 md:min-h-36 py-8 gap-y-4"
    :class="[
      placeItems.grid,
      `grid-row-${rowsNumber}`,
    ]"
  >
    <NuxtLink v-if="theme.footer.credits.enabled" :to="theme.footer.credits.repository">
      <h1 class="text-3xl font-bold text-primary-900 dark:text-primary-100">
        Alpine.
      </h1>
    </NuxtLink>

    <div v-if="theme.footer.navigation" class="grid grid-flow-col gap-x-9 auto-cols-max">
      <NuxtLink
        v-for="link of navigation"
        :key="link._path"
        :to="link._path"
        active-class="font-bold"
        class="text-primary dark:text-primary-200"
      >
        {{ link.title }}
      </NuxtLink>
    </div>
    <p v-if="theme.footer.socials && theme.footer.socials.message" class="text-center text-primary dark:text-primary-200">
      {{ theme.footer.socials.message }}
    </p>
    <div v-if="theme.footer.socials.icons" class="flex flex-col" :class="placeItems.icons">
      <div class="flex gap-x-9">
        <NuxtLink v-for="(social, index) in theme.socials.slice(0, 6)" :key="index" :to="social.link">
          <Icon v-if="social.icon" :name="`uil:${social.icon}`" class="w-5 h-5 text-primary" :alt="`${social.label} icon`" />
          <span v-else> {{ social.label }}</span>
        </NuxtLink>
      </div>
      <div v-if="theme.socials.length > 6" class="flex my-5 text-blue-400 outline space-x-3 rounded-xl outline-1 w-full p-4 bg-blue-100 outline-blue-300">
        <Icon name="uil:info-circle" class="w-5 h-5 !text-blue-400" />
        <p>Please consider to override Footer.vue if you want to add more icons</p>
      </div>
    </div>
  </footer>
</template>
