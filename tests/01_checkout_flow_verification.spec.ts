import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

test('Checkout flow verification', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');

    const cartPage = new CartPage(page);
    await cartPage.addToCart();
    await cartPage.removeBoltTShirt();
    await cartPage.proceedToCheckout();

    const expectedProducts: string[] = ['Sauce Labs Backpack', 'Bike Light', 'Fleece Jacket', 'Onesie', 'Test.allTheThings() T-Shirt (Red)'];
    const orderText = await page.locator('.cart_list').innerText();
    const allExpectedProductsIncluded = expectedProducts.every(product => orderText.includes(product));
    expect(allExpectedProductsIncluded).toBe(true);

});
