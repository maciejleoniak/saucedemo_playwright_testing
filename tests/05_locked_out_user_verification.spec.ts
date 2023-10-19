import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('locked_out_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="password"]').press('Enter');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('div').filter({ hasText: /^Epic sadface: Sorry, this user has been locked out\.Login$/ }).first().click();
  await page.locator('div').filter({ hasText: /^Epic sadface: Sorry, this user has been locked out\.Login$/ }).first().click();
  await page.locator('[data-test="error"]').click();
  await page.locator('#login_button_container').click();
});