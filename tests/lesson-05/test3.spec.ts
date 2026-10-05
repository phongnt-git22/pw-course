import { expect, test } from '@playwright/test';

test('Thêm 100 todo và xóa các todo có số lẻ', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/'); // đi đến trang https://material.playwrightvn.com
  await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click(); // click vào link có text "Bài học 3: todo page"

  const taskInput = page.getByPlaceholder('Enter a new task'); // tìm ô input có placeholder "Enter a new task"
  const addTaskButton = page.getByRole('button', { name: 'Add Task' }); // truy xuất đến button có text là Add Task

  for (let number = 1; number <= 100; number++) {
    await taskInput.fill(`Todo ${number}`);
    await addTaskButton.click();
  }

  await expect(page.locator('#task-list li')).toHaveCount(100); // Ktra danh sách có đúng 100 mục <li> trc khi xóa

  // Trang mở hộp xác nhận trước khi xóa mỗi todo.
  // Đăng ký cách xử lý hộp thoại của trình duyệt. Khi trang hiện hộp xác nhận xóa todo, Playwright tự bấm OK bằng dialog.accept().
  page.on('dialog', async (dialog) => {
    await dialog.accept();
  });

  for (let number = 1; number <= 100; number += 2) {
    await page.locator(`#todo-${number}-delete`).click();
  }

  await expect(page.locator('#task-list li')).toHaveCount(50); // mong đợi còn đúng 50 todo sau khi xóa 50 mục lẻ 
  await expect(page.locator('#task-list li').filter({ hasText: 'Todo 99' })).toHaveCount(0); // mong đợi todo 99 bị xóa và ko còn visible trong ds 
  await expect(page.locator('#task-list li').filter({ hasText: 'Todo 100' })).toHaveCount(1); // mong đợi todo 100 được hiển thị trong ds
});
