// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true,
  experimental: {
    writeEarlyHints: true
  },
  devtools: {
    enabled: true
  }
})