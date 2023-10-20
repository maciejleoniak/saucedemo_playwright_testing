import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

const username = 'problem_user';
const password = 'secret_sauce';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
});

test.afterEach(async ({ page }) => {
  await page.close()
})

test('Add to cart with problem user', async ({ page }) => {

  // it should be in some page (propably in cart page)


  // await page.locator('text=backpack').click();
  // await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  // await page.locator('#shopping_cart_container a').click();


  // const cartItemVisible = await page.locator('.cart_item').isVisible();
  // expect(cartItemVisible).toBe(false);

  //
});