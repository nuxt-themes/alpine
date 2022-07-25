<script lang="ts" setup>
const { navigation } = useContent()
const theme = useTheme()
</script>

<template>
  <div
    v-if="
      theme.footer.position &&
        (theme.footer.position === 'left' ||
          theme.footer.position === 'center' ||
          theme.footer.position === 'right')
    "
    class="grid grid-cols-1 h-32 md:h-36 py-6 md:py-8 mb-6 md:mb-8 mt-24"
    :class="[
      {
        'place-items-start': theme.footer.position === 'left',
        'place-items-center': theme.footer.position === 'center',
        'place-items-end': theme.footer.position === 'right',
      },
      `grid-row-${
        theme.footer.navigation +
        theme.footer.title +
        theme.footer.socials.enabled +
        !!theme.footer.socials.message.length
      }`,
    ]"
  >
    <h1 v-if="theme.footer.title" class="text-3xl font-bold text-primary-900 dark:text-primary-100">
      Alpine.
    </h1>
    <div v-if="theme.footer.navigation" class="grid grid-flow-col gap-x-9 auto-cols-max my-4">
      <NuxtLink
        v-for="link of navigation"
        :key="link._path"
        :to="link._path"
        active-class="font-bold"
        class="text-primary-700 dark:text-primary-200"
      >
        {{ link.navTitle || link.title }}
      </NuxtLink>
    </div>
    <p v-if="theme.footer.socials.message && theme.footer.socials.enabled" class="text-primary-700 dark:text-primary-200 text-center">
      {{ theme.footer.socials.message }}
    </p>
    <div v-if="theme.footer.socials.enabled" class="grid grid-flow-col gap-x-9 auto-cols-max">
      <NuxtLink v-for="[icon, link] of Object.entries(theme.socials)" :key="icon" :to="link">
        <Icon v-if="theme.footer.socials.icons" :name="`mdi:${icon}`" class="w-4 h-4" />
        <p v-else>
          {{ icon }}
        </p>
      </NuxtLink>
    </div>
  </div>
  <div v-else />
</template>
