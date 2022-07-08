<script lang="ts" setup>
const { navigation } = useContent()
</script>

<template>
  <div>
    <div>
      <!-- Title -->
      <div class="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
        <p>Alpine.</p>
      </div>
      <div class="absolute space-x-3 text-gray-500 transition right-10 top-10">
        <ColorModeSwitch class="hover:text-gray-700 dark:hover:text-gray-300" />
      </div>
    </div>
    <!-- Navigation -->
    <div
      class="flex justify-center max-w-2xl px-4 py-4 mx-auto ustify-between sm:px-8"
    >
      <div class="text-gray-700 dark:text-gray-200">
        <NuxtLink
          v-for="link of navigation"
          :key="link._path"
          :to="link._path"
          active-class="font-bold"
          class="mr-4"
        >
          {{ link.navTitle || link.title }}
        </NuxtLink>
      </div>
      <!-- Social icons & Color Mode -->
    </div>
  </div>
</template>
