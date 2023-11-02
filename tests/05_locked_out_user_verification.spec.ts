import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const username = 'locked_out_user';
const password = 'secret_sauce';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(username, password);
});

test.afterEach(async ({ page }) => {
    await page.close();
});

test('locked out user verification', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginErrorUserVerification();
});