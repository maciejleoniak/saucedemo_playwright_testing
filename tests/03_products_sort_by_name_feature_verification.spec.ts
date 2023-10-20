import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

const username = 'standard_user';
const password = 'secret_sauce';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(username, password);
});

test.afterEach(async ({ page }) => {
    await page.close()
})

test('....', async ({ page }) => {
  await page.locator('[data-test="product_sort_container"]').selectOption('za');
  await page.locator('[data-test="product_sort_container"]').selectOption('lohi');
  await page.locator('[data-test="product_sort_container"]').selectOption('hilo');

});