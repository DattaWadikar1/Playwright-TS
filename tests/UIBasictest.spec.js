const {test,expect} = require('@playwright/test');
const { time } = require('node:console');
test('Basic UI Test', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://google.com');
    await page.screenshot({path:'google.png'});
    


});
test('UI Controls', async ({page})=>{

    const userName=  page.locator('#username');
    const password=  page.locator('#password');
    const signInBtn=  page.locator('#signInBtn');
    const dropdown=  page.locator('select.form-control');
    const documentLink=  page.locator('[href*="documents-request"]');
    await page.goto('/loginpagePractise');

    await dropdown.selectOption('consult');
    await page.locator('.radiotextsty').last().click();
    await page.locator('#okayBtn').click();
    expect(page.locator('.radiotextsty').last()).toBeChecked(); 
    console.log(await page.locator('.radiotextsty').last().isChecked());

    await page.locator('#terms').click();
    expect( page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    expect(page.locator('#terms')).not.toBeChecked();
    expect(await page.locator('#terms').isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute('class','blinkingTexts');

});

test.only('Child Windows', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName=  page.locator('#username');
    await page.goto('/loginpagePractise');
    const documentLink=  page.locator('[href*="documents-request"]');
    const [newPage] = await Promise.all([
        context.waitForEvent('page'), // listen for new page event  pending , rejecting , fulfilled 
        documentLink.click()
    ]);
    const text= await newPage.locator('.red').textContent();
    const arrayText= text.split('@');
    const domain=arrayText[1].split(" ")[0];
    console.log(arrayText);
    //console.log(domain);
    await page.locator('#username').fill(domain);
    console.log(await page.locator('#username').inputValue());






    
});