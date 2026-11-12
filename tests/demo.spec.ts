

import { test, expect } from '@playwright/test';

/*Find an order in a dynamic table and validate its status
Scenario: An order-management application displays hundreds of rows. Find order ORD-1002 and verify its status is Shipped.
Input
Plain Text
Order ID: ORD-1002
Expected status: Shipped*/
  

test('Find product and validate its price', async ({ page }) => {
  // Step 1: Open SauceDemo
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Login
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Step 3: Verify inventory page
  await expect(page).toHaveURL(/inventory\.html/);

  // Step 4: Find the required product dynamically
  const product = page
    .locator('.inventory_item')
    .filter({
      has: page.getByText('Sauce Labs Backpack', { exact: true })
    });

  // Step 5: Verify exactly one matching product exists
  await expect(product).toHaveCount(1);

  // Step 6: Validate the product price
  await expect(product.locator('.inventory_item_price'))
    .toHaveText('$29.99');
});


