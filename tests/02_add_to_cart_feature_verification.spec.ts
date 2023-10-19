import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

test.only('Checkout flow verification', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('problem_user', 'secret_sauce');


  await page.locator('text=backpack').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('#shopping_cart_container a').click();
  

  const cartItemVisible = await page.locator('.cart_item').isVisible();
  expect(cartItemVisible).toBe(false);


  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="cancel"]').click();
  
});