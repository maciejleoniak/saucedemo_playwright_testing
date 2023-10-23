import { Page } from '@playwright/test';

export class SortPage {
    page: Page;

    readonly sortOptionSelector = '[data-test="product_sort_container"]';
    readonly selectOptionAtoZ = 'az';
    readonly selectOptionZtoA = 'za';
    readonly selectOptionPriceHighToLow = 'hilo';
    readonly selectOptionPriceLowToHigh = 'lohi';

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

    
}