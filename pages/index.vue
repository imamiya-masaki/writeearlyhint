<script setup>
definePageMeta({
  link: [
    { rel: 'preload', href: 'https://imamiya-masaki.github.io/thirdparty-js/deliver/third-party.js', as: 'script' }
  ],
})
</script>

<template>
  <div>
    <h1>JavaScript Preload Demo</h1>
    <p>This page preloads a third-party JavaScript file using HTTP Early Hints.</p>
  </div>
</template>
