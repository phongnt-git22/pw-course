import { test } from '@playwright/test'

test.describe('locate tests', async () => {
    test("Locate basic", async ({ page }) => {
        await page.goto("https://material.playwrightvn.com/");

        const bai1Loc = page.locator('//a[@href="01-xpath-register-page.html"]');
        const adsLoc = page.locator("//div[@id='ads-here']");
    });
});