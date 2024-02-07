import path from 'path';
import { configDefaults, defineConfig } from 'vitest/config';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    vue(),
    Components({
      dirs: [
        './components',
        './modules/dashboard/components',
      ],
    }),
    AutoImport({
      imports: ['vue', 'vitest', 'pinia'],
      dirs: ['./composables', './composables/**', './stores', './types'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '~': path.resolve(__dirname, './'),
      '@dashboard': path.resolve(__dirname, './modules/dashboard'),
      '#imports': path.resolve(__dirname, './.nuxt/imports.d.ts'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: path.resolve(__dirname, './tests/setup.ts'),
    css: true,
    testTimeout: 60_000,
    hookTimeout: 60_000,
    coverage: {
      provider: 'v8', // https://vitest.dev/guide/coverage.html#coverage-providers
    },
    exclude: [...configDefaults.exclude, 'tests/e2e/*'],
  },
});
