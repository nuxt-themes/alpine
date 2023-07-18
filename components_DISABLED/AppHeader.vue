<script lang="ts" setup>
const alpine = useAppConfig().alpine

const show = ref(false)
</script>

<template>
  <header :class="alpine.header.position || 'left'">
    <div class="menu">
      <button @click="(show = !show)" aria-label="Navigation Menu">
        <svg width="24" height="24" viewBox="0 0 68 68" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 34C8 32.1362 8 31.2044 8.30448 30.4693C8.71046 29.4892 9.48915 28.7105 10.4693 28.3045C11.2044 28 12.1362 28 14 28C15.8638 28 16.7956 28 17.5307 28.3045C18.5108 28.7105 19.2895 29.4892 19.6955 30.4693C20 31.2044 20 32.1362 20 34C20 35.8638 20 36.7956 19.6955 37.5307C19.2895 38.5108 18.5108 39.2895 17.5307 39.6955C16.7956 40 15.8638 40 14 40C12.1362 40 11.2044 40 10.4693 39.6955C9.48915 39.2895 8.71046 38.5108 8.30448 37.5307C8 36.7956 8 35.8638 8 34Z" />
          <path d="M28 34C28 32.1362 28 31.2044 28.3045 30.4693C28.7105 29.4892 29.4892 28.7105 30.4693 28.3045C31.2044 28 32.1362 28 34 28C35.8638 28 36.7956 28 37.5307 28.3045C38.5108 28.7105 39.2895 29.4892 39.6955 30.4693C40 31.2044 40 32.1362 40 34C40 35.8638 40 36.7956 39.6955 37.5307C39.2895 38.5108 38.5108 39.2895 37.5307 39.6955C36.7956 40 35.8638 40 34 40C32.1362 40 31.2044 40 30.4693 39.6955C29.4892 39.2895 28.7105 38.5108 28.3045 37.5307C28 36.7956 28 35.8638 28 34Z" />
          <path d="M48 34C48 32.1362 48 31.2044 48.3045 30.4693C48.7105 29.4892 49.4892 28.7105 50.4693 28.3045C51.2044 28 52.1362 28 54 28C55.8638 28 56.7956 28 57.5307 28.3045C58.5108 28.7105 59.2895 29.4892 59.6955 30.4693C60 31.2044 60 32.1362 60 34C60 35.8638 60 36.7956 59.6955 37.5307C59.2895 38.5108 58.5108 39.2895 57.5307 39.6955C56.7956 40 55.8638 40 54 40C52.1362 40 51.2044 40 50.4693 39.6955C49.4892 39.2895 48.7105 38.5108 48.3045 37.5307C48 36.7956 48 35.8638 48 34Z" />
        </svg>
      </button>
    </div>

    <div class="overlay" :class="[show && 'show']">
      <MainNav @link-click="show = !show" />
    </div>

    <div class="logo">
      <NuxtLink v-if="alpine.header.logo" to="/">
        <!-- TODO: width/height doesn't make much sense here, but Lighthouse requires it. 
        Used current Alpine logo ratio, will break on enduser logo -->
        <NuxtImg class="dark-img" :src="alpine.header.logo.pathDark" :alt="alpine.header.logo.alt" width="89" height="31" />
        <NuxtImg class="light-img" :src="alpine.header.logo.path" :alt="alpine.header.logo.alt" width="89" height="31" />
      </NuxtLink>
      <NuxtLink v-else to="/" class="fallback">
        {{ alpine.title }}
      </NuxtLink>
    </div>

    <div class="main-nav">
      <MainNav />
    </div>
  </header>
</template>

<style scoped lang="ts">
css({
  header: {
    '--header-padding': '{space.16}',
    '--logo-height': '{space.8}',
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
    alignItems: 'center',
    gap: '{space.4}',
    py: 'var(--header-padding)',
    '.menu': {
      position: 'absolute',
      display: 'flex',
      ':hover': {
        color: '{color.primary.500}',
      },
      '.left &&': {
        right: 0
      },
      '@sm': {
        display: 'none'
      }
    },
    '.overlay': {
      position: 'absolute',
      top: 'calc(var(--header-padding) + var(--logo-height) + {space.2})',
      backgroundColor: '{alpine.backdrop.backgroundColor}',
      border: '1px solid {color.gray.200}',
      borderRadius: '{radii.md}',
      padding: '{space.6}',
      paddingRight: '{space.24}',
      fontSize: '{text.lg.fontSize}',
      lineHeight: '{text.lg.lineHeight}',
      fontWeight: '{fontWeight.medium}',
      transition: 'all 250ms',
      perspective: '2000px',
      transformOrigin: 'top',
      backdropFilter: 'blur(20px)',
      willChange: 'opacity, transform',
      '&:not(.show)': {
        opacity: 0,
        transform: 'translateY(-10px) rotateY(-8deg) rotateX(-20deg)',
        '.left &&': {
          transform: 'translateY(-10px) rotateY(8deg) rotateX(-20deg)',
        },
        pointerEvents: 'none'
      },
      '.left &&': {
        right: 0,
        padding: '{space.6}',
        paddingLeft: '{space.16}',
        textAlign: 'right'
      },
      '@sm': {
        display: 'none'
      },
      '@dark': {
        borderColor: '{color.gray.800}',
      }
    },
    '.logo': {
      display: 'flex',
      gridColumn: 'span 12 / span 12',
      height: 'var(--logo-height)',
      a: {
        display: 'flex',
      },
      '.center &&': {
        gridColumn: 'span 12 / span 12',
        justifyContent: 'center',
      },
      '.right &&': {
        justifyContent: 'flex-end',
      },
      '@sm': {
        gridColumn: 'span 4 / span 4',
        gridColumnStart: 'auto',
        '.right &&': {
          order: 2,
        },
      },
      '.fallback': {
        fontSize: '{text.2xl.fontSize}',
        lineHeight: '{text.2xl.lineHeight}',
        fontWeight: '{fontWeight.semibold}'
      }
    },
    '.main-nav': {
      display: 'none',
      '@sm': {
        display: 'flex',
        gridColumn: 'span 8 / span 8',
        fontSize: '{text.xl.fontSize}',
        lineHeight: '{text.xl.lineHeight}',
        fontWeight: '{fontWeight.medium}',
        '.center &&': {
          gridColumn: 'span 12 / span 12',
          justifyContent: 'center',
        },
        '.right &&': {
          justifyContent: 'flex-start',
        },
        '.left &&': {
          justifyContent: 'flex-end',
        },
      }
    },
  }
})
</style>
