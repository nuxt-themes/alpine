<script setup lang="ts">
const props = defineProps({
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
  >
    <Icon v-if="icon.icon" :name="icon.icon" />
  </NuxtLink>
</template>

<style scoped lang="ts">
css({
  a: {
    '--social-icon-size': '24px',
    width: 'var(--social-icon-size)',
    height: 'var(--social-icon-size)',
    display: 'flex',
    ':hover': {
      // TODO: why prose links is not yellow, should be primary
      color: '{color.primary.500}',
    },
    svg: {
      width: '100%',
      height: '100%',
    }
  }
})
</style>
