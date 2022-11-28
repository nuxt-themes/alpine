<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: 'w-5 h-5'
  },
  spacing: {
    type: String,
    default: 'p-0'
  },
  socials: {
    type: Object,
    default: () => {}
  }
})

const builtInSocials = ['twitter', 'facebook', 'instagram', 'youtube', 'github', 'medium']

const icons = computed<any>(() => {
  return Object.entries(props.socials)
    .map(([key, value]) => {
      if (typeof value === 'object') {
        return value
      } else if (typeof value === 'string' && value && builtInSocials.includes(key)) {
        return {
          href: `https://${key}.com/${value}`,
          icon: `uil:${key}`,
          label: value
        }
      } else {
        return null
      }
    })
    .filter(Boolean)
})
</script>

<template>
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <NuxtLink
    v-for="icon in icons"
    :key="icon.label"
    rel="noopener noreferrer"
    :title="icon.label"
    :aria-label="icon.label"
    :href="icon.href"
    target="_blank"
    class="u-text-gray-500 hover:u-text-gray-700"
    :class="[spacing]"
  >
    <Icon v-if="icon.icon" :name="icon.icon" :class="size" />
  </NuxtLink>
</template>
