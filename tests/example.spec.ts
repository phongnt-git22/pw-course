import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Tài liệu học automation test/);
});

test('Bài 1: Register Page', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Click the register page link
  await page.getByRole('link', { name: 'Register' }).click();

  // Expects page to have a heading with the name is User Registration.
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});
