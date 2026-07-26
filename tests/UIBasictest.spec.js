const {test} = require('@playwright/test');
const { time } = require('node:console');
test('Basic UI Test', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://google.com');
    await page.screenshot({path:'google.png'});
    


});
test('Basic UI Test 2', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { timeout: 30000 });
    await page.screenshot({path:'orangehrm.png'});
    


});