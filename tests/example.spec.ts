import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page).toHaveTitle(/haha minu title/);
});

test('check if there are 81 cells', async ({page}) => {
  await page.goto('http://localhost:3000/');
  const cells = await page.locator('.Cell')
  await expect(cells).toHaveCount(81)
})
test('check if the cells are empty', async ({page}) => {
  await page.goto('http://localhost:3000');
  const cells = await page.locator('.Cell');
  for (let i = 0; i < 81; i++) {
    await expect(cells.nth(i)).toHaveValue('')
  }
})


