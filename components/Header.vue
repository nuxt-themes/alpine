<script lang="ts" setup>
import { ref, toRefs } from 'vue'
import { useScroll } from '@vueuse/core'

const navLinks = ref<HTMLElement | null>(null)
const { arrivedState } = useScroll(navLinks, {
  offset: { right: 64, left: 64 }
})
const { left, right } = toRefs(arrivedState)
const { navigation } = useContent()
const theme = useTheme()
</script>

<template>
  <header class="my-8">
    <div
      class="flex flex-row justify-between flex-wrap"
      :class="[{'lg:!flex-nowrap': theme?.header?.position === 'inline'},
               {'!justify-center': theme?.header?.position === 'center'}]"
    >
      <NuxtLink
        v-if="theme?.header?.logo"
        to="/"
        class="order-1 shrink-0 text-primary-700 dark:text-primary-200"
      >
        <img class="dark-img" :src="theme.header.logo.pathDark" :alt="theme.header.logo.alt">
        <img class="light-img" :src="theme.header.logo.path" :alt="theme.header.logo.alt">
      </NuxtLink>
      <div
        class="overflow-x-auto flex-initial mt-8 order-last basis-full flex"
        :class="[
          {'lg:mx-8 lg:!mt-0 lg:!order-2 lg:justify-self-end lg:!basis-auto': theme?.header?.position === 'inline'},
          {'!justify-end': theme?.header?.position === 'right'},
          {'!justify-center': theme?.header?.position === 'center'}
        ]"
      >
        <div
          class="flex max-w-min overflow-x-auto"
        >
          <div class="scroll-shadow-box">
            <span class="bg-gradient-to-r scroll-shadow left-0" :class="{'!opacity-0': left}" />
          </div>
          <ul
            ref="navLinks"
            class="flex flex-initial h-full gap-x-8 pb-4 overflow-x-auto shrink"
          >
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
          <div class="scroll-shadow-box">
            <span class="bg-gradient-to-l scroll-shadow right-0" :class="{'!opacity-0': right}" />
          </div>
        </div>
      </div>
      <ColorModeSwitch
        class="flex-none order-3 w-5 justify-self-end"
        :class="{'!order-first': theme?.header?.position === 'right'}"
      />
    </div>
  </header>
</template>

<style>
.scroll-shadow-box {
  @apply flex-none w-0 mt-0.5 overflow-visible relative
}
.scroll-shadow {
  @apply absolute z-[1] w-16 h-full transition-all opacity-100 duration-500 pointer-events-none from-secondary-100 dark:from-secondary-900 to-transparent
}
</style>
