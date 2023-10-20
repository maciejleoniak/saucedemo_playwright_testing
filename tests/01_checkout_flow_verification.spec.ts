import { test } from '@playwright/test';
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

test.only('Checkout flow verification', async ({ page }) => {
    const cartPage = new CartPage(page);
    await cartPage.addToCart();
    await cartPage.removeBoltTShirt();
    await cartPage.proceedToCheckout();
    await cartPage.checkOutVerification();
    await cartPage.finishCheckout();
});