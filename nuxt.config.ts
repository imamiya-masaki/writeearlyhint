// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true,
  experimental: {
    writeEarlyHints: true
  },
  devtools: {
    enabled: true
  },
  app: {
    head: {
      link: [{ rel: 'preload', href: 'https://imamiya-masaki.github.io/thirdparty-js/deliver/third-party.js', as: 'script' }]
    }
  }
})