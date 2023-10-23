import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SortPage } from '../pages/SortPage';

const username = 'standard_user';
const password = 'secret_sauce';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
});

test.afterEach(async ({ page }) => {
  await page.close()
})

test.describe('sort option work properly for every select options', () => {
  test('select option for...', async ({ page }) => {
    const sortPage = new SortPage(page);
    await sortPage.sortByPriceHightoLow();

    const item = await page.locator('.inventory_item').nth(0).textContent();
    const regex = /\s*(\d+(\.\d+)?)/g;
    const item0 = item?.match(regex);
    const item01 = parseFloat(item0 as unknown as string)
    console.log(item01)

    const item2 = await page.locator('.inventory_item').nth(1).textContent();
    const item02 = item2?.match(regex);
    const item002 = parseFloat(item02 as unknown as string)

    console.log(item002)

  })
  
});