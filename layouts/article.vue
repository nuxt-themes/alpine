<template>
  <article ref="article">
    <!-- TODO: could be refactored as a transparent ButtonLink -->
    <NuxtLink :to="parentPath" class="back">
      <Icon name="ph:arrow-left" />
      <span>
        {{ alpine?.back?.text || "Back" }}
      </span>
    </NuxtLink>
    <header>
      <h1 v-if="page?.title" class="title">
        {{ page.title }}
      </h1>
      <time v-if="page?.date" :datetime="page.date">
        {{ formatDate(page.date) }}
      </time>
    </header>

    <div class="prose">
      <slot />
      <div v-if="alpine?.backToTop" class="back-to-top">
        <ProseA @click.prevent.stop="onBackToTop">
          {{ alpine?.backToTop?.text || "Back to top" }}
          <Icon
            :name="alpine?.backToTop?.icon || 'material-symbols:arrow-upward'"
          />
        </ProseA>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const { page } = useContent();
const route = useRoute();
const alpine = useAppConfig().alpine;
import { onMounted, onUnmounted } from "vue";

const article = ref<HTMLElement | null>(null);

if (page.value && page.value.cover) {
  useHead({
    meta: [{ property: "og:image", content: page.value.cover }],
  });
}

const parentPath = computed(() => {
  const pathTabl = route.path.split("/");
  pathTabl.pop();
  return pathTabl.join("/");
});

const onBackToTop = () => {
  article.value?.scrollIntoView({
    behavior: "smooth",
  });
};
const scripts = [];
const loadScript = (url, index) => {
  let script;
  setTimeout(() => {
    try {
      script = window.document.createElement("script");
      script.src = url;
      script.async = true;
      window.document.getElementById(index).appendChild(script);
      scripts.push(script);
    } catch (e) {}
  }, 0);
};
onMounted(() => {
  page.value.customjs?.map(loadScript);
});
onUnmounted(() => {
  scripts.map((script, index) => {
    setTimeout(() => {
      try {
        window.document.getElementById(index).removeChild(script);
      } catch (e) {}
    });
  });
});
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
      '.back-to-top': {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        a: {
          cursor: 'pointer',
          fontSize: '{text.lg.fontSize}'
        }
      },
      '& :deep(h1)': {
        display: 'none'
      },
    }
  }
})
</style>
