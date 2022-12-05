<script lang="ts" setup>
const { navigation } = useContent()
</script>

<template>
  <nav>
    <ul>
      <li
        v-for="link of navigation"
        :key="link._path"
      >
        <NuxtLink
          :to="link._path"
        >
          <span class="underline-fx" />
          {{ link.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="ts">
css({
  nav: {
    ul: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      gap: '{space.8}',
      a: {
        position: 'relative',
        '&.router-link-active': {
          fontWeight: '{fontWeight.bold}'
        },
        '.underline-fx': {
          position: 'absolute',
          bottom: '-4px',
          width: 0,
          height: '1px',
          backgroundColor: 'currentColor',
          transition: 'width 200ms ease-in-out',
          'a:hover &&': {
            width: '100%'
          }
        }
      },

    }
  }
})
</style>
