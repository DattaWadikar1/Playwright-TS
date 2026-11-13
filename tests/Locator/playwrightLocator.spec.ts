import {test, expect} from '@playwright/test';

test('Playwright special locators', async ({page})=>{
    
    await page.goto('/angularpractice/');
    //await page.getByPlaceholder('Name').fill('Hello');
    //await page.getByPlaceholder('Email').fill('hello@example.com');
    await page.getByLabel('Password').fill('password');
    await page.getByLabel('Check me out if you Love IceCreams!').check();
    await page.getByRole('button',{name:'Submit'}).click();
    await page.getByText('Success! The Form has been submitted successfully!.').isVisible();
    await page.getByRole('button',{name:'Shop'}).click();
    await page.locator('.card-body').filter({hasText:'Blackberry'}).getByRole('button').click();
});