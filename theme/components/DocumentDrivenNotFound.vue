<template>
  <div class="h-screen">
    <div class="m-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-center">
      <div>
        <p class="text-5xl mb-5 font-bold">
          404
        </p>
        <p class="mb-8">
          This page could not be found.
        </p>
        <NuxtLink to="/" class="inline-flex items-center gap-2">
          Back to homepage
          <Icon name="uil:arrow-right" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
