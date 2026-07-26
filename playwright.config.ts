import { defineConfig, devices } from '@playwright/test';


const config =({
  testDir: './tests',
  expect: {
    timeout: 40 * 1000,
  },
  reporter: 'html',
  use: {
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
module.exports = config