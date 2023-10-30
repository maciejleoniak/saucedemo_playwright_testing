import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SortPage } from '../pages/SortPage';


const username = 'standard_user';
const password = 'secret_sauce';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(username, password);
});

test.afterEach(async ({ page }) => {
    await page.close()
})

test.describe('sort option work properly for every select options', () => {
  test('select option for price - high to low', async ({ page }) => {
    const sortPage = new SortPage(page);
    await sortPage.sortByNameAtoZ();

    const cointenerItem = page.locator('#inventory_container > div > div:nth-child(1) > div.inventory_item_description').textContent();
    console.log(cointenerItem);
    const firstItem = cointenerItem;
    console.log(firstItem);


});
});