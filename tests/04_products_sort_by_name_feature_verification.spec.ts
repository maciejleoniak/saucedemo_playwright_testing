import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SortPage } from '../pages/SortPage';


const username = 'standard_user';
const password = 'secret_sauce';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(username, password);
});

test.afterEach(async ({ page }) => {
    await page.close();
});

test.describe('sort option work properly for every select options', () => {
    test('select option for name - A to Z', async ({ page }) => {
        const sortPage = new SortPage(page);
        await sortPage.sortByNameAtoZ();
        await sortPage.sortByNameVerification();
    
    });

    test('select option for name - Z to A', async ({ page }) => {
        const sortPage = new SortPage(page);
        await sortPage.sortByNameZtoA();
        await sortPage.sortByNameVerification();
    });
});