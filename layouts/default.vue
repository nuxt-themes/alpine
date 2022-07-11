<template>
  <div class="text-gray-700 dark:text-gray-200">
  <Navbar />
    <main class="prose dark:prose-invert m-auto sm:px-0 max-w-[342px] md:max-w-[650px] lg:max-w-[864px] break-words">
      <slot />
    </main>
  </div>
</template>

<style lang="postcss">
/* Customize headers to remove default underline */
.prose p {
  @apply my-[36px]
}
.prose h2 a,
.prose h3 a {
  @apply no-underline;
  &:hover {
    @apply border-b border-neutral-600 dark:border-neutral-300;
  }
}
</style>
