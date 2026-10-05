import { expect, test } from '@playwright/test'; // Nhập công cụ tạo test và kiểm tra kết quả từ Playwright.

test('Add 3 products with quantity 2, 3, 1', async ({ page }) => { // Bắt đầu bài test; page là tab trình duyệt để thao tác.
  await page.goto('https://material.playwrightvn.com/'); // Mở trang chủ bài tập và chờ trang tải xong.
  await page.getByRole('link', { name: 'Bài học 2: Product page' }).click(); // Click vào link có text Bài 2: Product page để mở trang sản phẩm

  const products = [ // Tạo danh sách sản phẩm và số lượng muốn thêm vào giỏ.
    { name: 'Product 1', quantity: 2 }, // Thêm 2 sản phẩm 1.
    { name: 'Product 2', quantity: 3 }, // Thêm 3 sản phẩm 2.
    { name: 'Product 3', quantity: 1 }, // Thêm 1 sản phẩm 3.
  ]; 

  for (const product of products) { // Lần lượt xử lý từng sản phẩm trong danh sách.
    const productCard = page.locator('.product').filter({ hasText: product.name }); // Tìm khung sản phẩm có tên khớp với sản phẩm đang xử lý.

    for (let i = 0; i < product.quantity; i++) { // Lặp lại theo số lượng cần thêm; i bắt đầu từ 0.
      await productCard.getByRole('button', { name: 'Add to Cart' }).click(); // Nhấp nút thêm hàng trong đúng khung sản phẩm.
    }

    const cartRow = page.locator('#cart-items tr').filter({ hasText: product.name }); // Tìm dòng trong cart chứa tên sản phẩm này.
    await expect(cartRow.locator('td').nth(2)).toHaveText(String(product.quantity)); // Kiểm tra ô thứ ba (số lượng) bằng số lượng mong muốn.
  } // Kết thúc vòng lặp xử lý cả ba sản phẩm.

  await expect(page.locator('#cart-items tr')).toHaveCount(3); // Xác nhận giỏ hàng có đúng ba dòng sản phẩm.
}); // Kết thúc bài test.
