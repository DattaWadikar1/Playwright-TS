
import { defineConfig, devices } from '@playwright/test';

const config = defineConfig({
  testDir: './tests',
  retries: 1,

  expect: {
    timeout: 40 * 1000,
  },

  reporter: [['html', { open: 'always' }]],

  use: {
    baseURL: 'https://rahulshettyacademy.com/',
    browserName: 'chromium',
    headless: false,
    trace: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

export default config;
