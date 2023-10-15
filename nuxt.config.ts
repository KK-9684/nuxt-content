// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    contentHead: false,
    api: {
      baseURL: '/api/_my_content'
    },
    markdown: {
      // Object syntax can be used to override default options
      remarkPlugins: {
        // Override remark-emoji options
        'remark-emoji': {
          emoticon: true
        },
        // Disable remark-gfm
        'remark-gfm': false,
        // Add remark-oembed
        'remark-oembed': {
          // Options
        }
      },
    }
  }
})
