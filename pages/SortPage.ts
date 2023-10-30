import { Page } from '@playwright/test';

export class SortPage {
    page: Page;

    readonly sortOptionSelector = '[data-test="product_sort_container"]';
    readonly selectOptionAtoZ = 'az';
    readonly selectOptionZtoA = 'za';
    readonly selectOptionPriceHighToLow = 'hilo';
    readonly selectOptionPriceLowToHigh = 'lohi';
    readonly sortedItemsSelector = '.inventory_item_price';

    constructor(page: Page) {
        this.page = page;
    }

    async sortByNameAtoZ() {
        await this.page.locator(this.sortOptionSelector).selectOption(this.selectOptionAtoZ);
    }

    async sortByNameZtoA() {
        await this.page.locator(this.sortOptionSelector).selectOption(this.selectOptionZtoA);
    }

    async sortByPriceHightoLow() {
        await this.page.locator(this.sortOptionSelector).selectOption(this.selectOptionPriceHighToLow);
    }

    async sortByPriceLowToHigh() {

        await this.page.locator(this.sortOptionSelector).selectOption(this.selectOptionPriceLowToHigh);
    }

    async sortByPriceVerification(): Promise<{ item0, item1 }> {
        const item000 = await this.page.locator(this.sortedItemsSelector).nth(0).textContent();
        const regex = /\s*(\d+(\.\d+)?)/g;
        const item00 = item000?.match(regex);
        const item0 = parseFloat(item00 as unknown as string)
       
        const item001 = await this.page.locator(this.sortedItemsSelector).nth(1).textContent();
        const item01 = item001?.match(regex);
        const item1 = parseFloat(item01 as unknown as string)

        return { item0, item1 };
    }

    async sortByNameVerification(){

    };
}