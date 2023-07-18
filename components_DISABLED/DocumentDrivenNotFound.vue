<template>
  <section>
    <p class="message">
      This page could not be found
    </p>

    <p class="status">
      404
    </p>

    <NuxtLink to="/">
      Back to homepage
      <Icon name="ph:arrow-right" />
    </NuxtLink>
  </section>
</template>

<style scoped lang="ts">
css({
  section: {
    minHeight: '50vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '.message': {
      fontSize: '{text.3xl.fontSize}',
      lineHeight: '{text.3xl.lineHeight}',
      fontWeight: '{fontWeight.medium}',
    },
    '.status': {
      text: '6xl',
      my: '{space.12}'
    },
    a: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      '.icon': {
        position: 'absolute',
        right: 'calc(0px - {space.1})',
        width: '{space.5}',
        height: '{space.5}',
        transform: 'translateX(100%)',
      }, 
    }
  }
})
</style>