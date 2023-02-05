<template>
  <article>
    <!-- TODO: could be refactored as a transparent ButtonLink -->
    <NuxtLink :to="parentPath" class="back">
      <Icon name="ph:arrow-left" />
      <span class="text-primary-900 dark:text-primary-100">
        Back
      </span>
    </NuxtLink>
    <header>
      <h1 v-if="page?.title" class="title">
        {{ page.title }}
      </h1>
      <time v-if="page?.date" class="text-primary-700 dark:text-primary-400" :datetime="page.date">
        {{ formatDate(page.date) }}
      </time>
    </header>

    <div class="prose">
      <slot />
    </div>
  </article>
</template>

<script setup lang="ts">
const { page } = useContent()
const route = useRoute()

const parentPath = computed(
  () => {
    const pathTabl = route.path.split('/')
    pathTabl.pop()
    return pathTabl.join('/')
  }
)
</script>

<style scoped lang="ts">
css({
  article: {
    maxWidth: '{alpine.readableLine}',
    mx: 'auto',
    py: '{space.4}',
    '@sm': {
      py: '{space.12}',
    },
    '.back': {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: '{text.lg.fontSize}',
      borderBottom: '1px solid {elements.border.secondary.static}',
      '& :deep(svg)': {
        width: '{size.16}',
        height: '{size.16}',
        marginRight: '{space.2}'
      }
    },
    header: {
      marginTop: '{space.16}',
      marginBottom: '{space.12}',
    },
    '.title': {
      fontSize: '{text.5xl.fontSize}',
      lineHeight: '{text.5xl.lineHeight}',
      fontWeight: '{fontWeight.semibold}',
      marginBottom: '{space.4}'
    },
    time: {
      color: '{elements.text.secondary.color.static}'
    },
    '.prose': {
      '& :deep(h1)': {
        display: 'none'
      }
    }
  }
})
</style>
