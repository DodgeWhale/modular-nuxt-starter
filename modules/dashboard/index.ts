import { defineNuxtModule, extendPages, createResolver } from 'nuxt/kit';
import type { NuxtPage } from 'nuxt/schema';

const { resolve } = createResolver(import.meta.url);

const routes: NuxtPage[] = [
  {
    name: 'homepage',
    path: '/',
    file: resolve('./pages/index.vue'),
  },
];

export default defineNuxtModule({
  meta: {
    name: 'dashboard-module',
    configKey: 'dashboard-module',
  },

  async setup() {
    extendPages((pages: NuxtPage[]): void => {
      routes.map((route: NuxtPage) => pages.push(route));
    });
  },
});
