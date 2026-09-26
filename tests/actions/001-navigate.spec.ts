import { test, expect } from '@playwright/test'

test.describe('Navigate tests', async () => {
  test("Navigate basic", async ({page}) => {
  });
  test("Navigate with option - referer", async ({page}) => {
    await page.goto("https://tailieu.hoctest.com", {
        referer: "https:playwright.com",
    }); 
  });
  test("Navigate with option - timeout", async ({page}) => {
    await page.goto("https://tailieu.hoctest.com" , {
      timeout: 1_500
    });
  });
   test("Navigate with option - waitUntil", async ({page}) => {
    await page.goto("https://tailieu.hoctest.com" , {
      waitUntil: "commit"
    });
  });
});