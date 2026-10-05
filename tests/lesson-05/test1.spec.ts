import { expect, test } from '@playwright/test';

test('Register with fully information', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: 'Bài học 1: Register Page (có đủ các element)' }).click();

  const username = 'Phong';
  await page.locator('#username').fill(username);
  await page.locator('#email').fill('student@example.com');
  await page.locator('#male').check();
  await page.locator('#reading').check();
  await page.locator('#traveling').check();
  await page.locator('#interests').selectOption(['technology', 'science']);
  await page.locator('#country').selectOption('United States');
  await page.locator('#dob').fill('2000-01-15');
  await page.locator('#profile').setInputFiles('tests/lesson-05/profile-picture.svg');
  await page.locator('#bio').fill('I am learning automation with Playwright TypeScript.');

  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page.locator('#userTable tbody tr').filter({ hasText: username })).toHaveCount(1);
});
