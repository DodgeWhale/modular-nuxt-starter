import { test as setup, Route, Page } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env.testing' });

setup('test case', async ({ page }: { page: Page }) => {
  await page.route('*/**/endpoint', async (route: Route) => {
    await route.fulfill({ json: {} });
  });
});
