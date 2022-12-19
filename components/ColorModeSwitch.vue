<script setup lang="ts">
const colorMode = useColorMode()
const onClick = () => {
  const values = ['system', 'light', 'dark']
  const index = values.indexOf(colorMode.preference)
  const next = (index + 1) % values.length

  colorMode.preference = values[next]
}
</script>

<template>
  <button aria-label="Color Mode" @click="onClick">
    <ColorScheme>
      <Icon v-if="colorMode.preference === 'dark'" name="uil:moon" />
      <Icon v-else-if="colorMode.preference === 'light'" name="uil:sun" />
      <Icon v-else name="uil:desktop" />
    </ColorScheme>
  </button>
</template>

<style scoped lang="ts">
css({
  button: {
    display: 'flex',
    '--color-mode-switcher-size': '24px',
    width: 'var(--color-mode-switcher-size)',
    height: 'var(--color-mode-switcher-size)',
    ':hover': {
      color: '{color.primary.500}',
    },
    svg: {
      width: '100%',
      height: '100%',
    }
  }
})
</style>
