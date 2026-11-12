import {test,expect} from '@playwright/test';

test.describe('Locator', () => {

    test('should locate an element by text', async ({ page }) => {
        await page.goto('/loginpagePractise');
        await page.locator('#username').fill('rahulshetty');
        await page.locator(' #password').fill('Learning@830$3mK2');
        await page.locator('#signInBtn').click();
        console.log(await page.locator("[style*='block']").textContent());
        await expect( page.locator("[style*='block']")).toContainText('Incorrect');

    });
    test('should locate an element by CSS selector', async ({ page }) => {
         const cardTitles = page.locator('.card-body a');
         const userName=  page.locator('#username');
         const password=  page.locator('#password');
         const signInBtn=  page.locator('#signInBtn');
        await page.goto('/loginpagePractise');
        await userName.fill('');
        await userName.fill('rahulshettyacademy');
        await password.fill('Learning@830$3mK2');
        await signInBtn.click();
        console.log(await cardTitles.nth(0).textContent());
        console.log(await cardTitles.first().textContent());
        console.log(await cardTitles.nth(1).textContent());
      
        const allTitles= await cardTitles.allTextContents();
        console.log(allTitles);
        await expect(cardTitles).toHaveCount(4);

    });

})