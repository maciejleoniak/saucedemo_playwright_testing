import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

test('Checkout flow verification', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('problem_user', 'secret_sauce');


  await page.locator('#item_4_title_link').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('#shopping_cart_container a').click();
  await page.getByText('QTYDescription').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="cancel"]').click();
});