import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SortPage } from '../pages/SortPage';

const username = 'standard_user';
const password = 'secret_sauce';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test.describe('sort option work properly for every select options', () => {
  test('select option for price - high to low', async ({ page }) => {
    const sortPage = new SortPage(page);
    await sortPage.sortByPriceHightoLow();
    expect((await sortPage.sortByPriceVerification()).item0).toBeGreaterThanOrEqual((await sortPage.sortByPriceVerification()).item1);
  });

  test('select option for price - low to high', async ({ page }) => {
    const sortPage = new SortPage(page);
    await sortPage.sortByPriceLowToHigh();
    expect((await sortPage.sortByPriceVerification()).item1).toBeGreaterThanOrEqual((await sortPage.sortByPriceVerification()).item0);
  });
});


