import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

test('Checkout flow verification with another creditential', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('performance_glitch_user', 'secret_sauce');

    const cartPage = new CartPage(page);
    await cartPage.addToCart();
    await cartPage.removeBoltTShirt();
    await cartPage.proceedToCheckout();
    await cartPage.checkOutVerification();
    await cartPage.finishCheckout();
});
