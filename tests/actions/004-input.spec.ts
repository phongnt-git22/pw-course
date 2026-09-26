import { test } from '@playwright/test'

test.describe('Input tests', async () => {
    test("Text-based", async ( { page }) => {
        await page.goto("https://material.playwrightvn.com/03-input-practice.html")

        const input = page.locator("//input[@id='username']");
        
        // //Normal fill
        // await input.fill('Hello HocTest.com');

        // await input.fill("HocTest.com", {
        //     force: true,
        //     timeout: 10_000, //thời gian tối đa cho actions này
        // });
        // await input.press("Alt", {
        //     delay: 3_000,
        //     timeout: 10_000,
        // });

        await input.pressSequentially("HocTest.com", {
            delay: 200,
            timeout: 10_000,
        });
    });
    // test("Text-based", async  ({ page }) => {
    //     await page.goto("https://material.playwrightvn.com/03-input-practice.html")
    //     const input = page.locator('//*[@id="email"]')
    // })
});