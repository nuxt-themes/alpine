<script lang="ts" setup>
const { navigation } = useContent()
const alpine = useAppConfig().alpine
</script>

<template>
  <footer
    :class="[
      alpine.footer.alignment
    ]"
  >
    <NuxtLink v-if="alpine.footer?.credits?.enabled" class="credits" :to="alpine.footer.credits.repository">
      Alpine.
    </NuxtLink>

    <div v-if="alpine.footer.navigation" class="navigation">
      <NuxtLink
        v-for="link of navigation"
        :key="link._path"
        :to="link._path"
      >
        {{ link.title }}
      </NuxtLink>
    </div>
    <p v-if="alpine.footer?.message" class="message">
      {{ alpine.footer.message }}
    </p>
    <div v-if="alpine.socials && Object.entries(alpine.socials)" class="socials">
      <div class="layout">
        <SocialIcons :socials="alpine.socials" />
      </div>
    </div>
    <div class="color-mode-switch">
      <ColorModeSwitch />
    </div>
  </footer>
</template>

<style scoped lang="ts">
css({
  footer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    placeItems: 'center',
    gap: '{space.4}',
    minHeight: '{space.32}',
    marginTop: '{space.24}',
    py: '{space.8}',
    '&.left': {
      placeItems: 'start'
    },
    '&.right': {
      placeItems: 'end'
    },
    '@md': {
      minHeight: '{space.36}',
    },
    '.credits': {
      fontSize: '{text.3xl.fontSize}',
      lineHeight: '{text.3xl.lineHeight}',
      fontWeight: '{fontWeight.bold}',
    },
    '.navigation': {
      display: 'flex',
      gap: '{space.8}',
      '.router-link-active': {
        color: '{color.red.500}'
      }
    },
    '.message': {
      textAlign: 'center'
    },
    '.socials': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '&.left': {
        alignItems: 'flex-start'
      },
      '&.right': {
        alignItems: 'flex-end'
      },
      '.layout': {
        display: 'flex',
        gap: '{space.8}'
      }
    },
    // '.color-mode-switch': {
    //   display: 'flex',
    //   justifyContent: 'flex-end',
    //   gridColumn: 'span 2 / span 2',
    // }
  }
})
</style>
