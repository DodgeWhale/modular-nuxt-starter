import dotenv from 'dotenv';
import path from 'path';
import { afterEach, beforeEach } from 'vitest';

dotenv.config({ path: path.resolve('..', '.env.testing') });

const runtimeConfig = {
  public: {
    apiBaseUrl: 'https://modular-nuxt-starter.com/api',
  },
};

vi.mock('#imports', () => {
  return {
    useRuntimeConfig() {
      return runtimeConfig;
    },
  };
});

beforeEach(() => {
  setActivePinia(createPinia());
});

afterEach(() => {
  vi.resetAllMocks();
});
