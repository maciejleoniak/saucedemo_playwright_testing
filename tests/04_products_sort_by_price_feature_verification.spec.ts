import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

test('....', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('problem_user', 'secret_sauce');


  await page.locator('[data-test="product_sort_container"]').selectOption('za');
  await page.locator('[data-test="product_sort_container"]').selectOption('lohi');
  await page.locator('[data-test="product_sort_container"]').selectOption('hilo');

});