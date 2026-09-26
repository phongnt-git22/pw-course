import { test, expect } from '@playwright/test'

test("Test 01: Home page", async ({ page })  => {
    await test.step("Step 1: Truy cập trang chủ" , async () => {
        await page.goto("https://e-commerce-dev.betterbytesvn.com/");
        // Click vào link có text là "Danh sách khóa học"
        // await page.getByRole("link", {name: "Danh sách khóa học" }).click();
        await page.getByPlaceholder("Search products.").pressSequentially("Xin chào, toi là K25 auto", {delay: 100})
    });

});