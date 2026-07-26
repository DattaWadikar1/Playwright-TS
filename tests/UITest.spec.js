const {test}=require('@playwright/test');
test('Sample UI Test',async({page})=>{
    await page.goto('https://google.com');
    await page.screenshot({path:'google.png'});
});