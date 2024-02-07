import { createResolver } from 'nuxt/kit';
import svgLoader from 'vite-svg-loader';

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'favicon.ico',
          sizes: 'any',
        },
      ],
      title: 'Modular Nuxt Starter',
    },
    // pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  alias: {
    '@dashboard': resolve('./modules/dashboard'),
  },

  css: ['@/assets/scss/main.scss'],

  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',

    // Local
    '~/modules/dashboard',
  ],

  vite: {
    plugins: [svgLoader()],

    optimizeDeps: {
      include: ['axios', 'class-variance-authority', 'nanoid'],
    },
  },

  imports: {
    dirs: ['types'],
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL ?? 'https://6554e25163cafc694fe725d0.mockapi.io',
    },
  },

  sourcemap: false,

  typescript: {
    typeCheck: true,
  },
});
