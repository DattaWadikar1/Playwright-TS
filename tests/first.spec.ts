
import { test } from '@playwright/test';

test('Browser Context Playwright test', async ({ browser }) => {
  // chrome - plugin /cookies
  const context = await browser.newContext();
  const page = await context.newPage();
  page.goto('https://www.google.com/');
  
}); 

test('Page Playwright test', async ({ page }) => {
  
  await  page.goto('https://www.google.com/');
  
}); 