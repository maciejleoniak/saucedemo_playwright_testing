import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

const username = 'problem_user';
const password = 'secret_sauce';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test('Add to cart with problem user', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.addToCarFromPageItem();
});