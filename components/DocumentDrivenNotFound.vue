<template>
  <div class="h-screen">
    <div class="m-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-center">
      <div>
        <p class="text-5xl mb-5 mt-0 font-bold">
          404
        </p>
        <p class="m-0">
          This page could not be found.
        </p>

        <p class="m-0 mt-8">
          <nuxt-link to="/">
            Back to homepage
          </nuxt-link>
          <Icon name="uil:arrow-right" />
        </p>
      </div>
    </div>
  </div>
</template>
