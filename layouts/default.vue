<template>
  <main>
    <slot />
  </main>
</template>

<style scoped lang="ts">
css({
  main: {
    '@sm': {
      px: '{space.12}'
    },
    '@lg': {
      px: 0
    }
  }
})
</style>
