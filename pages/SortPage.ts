import { Page } from '@playwright/test';

export class SortPage {
    page: Page; 

    constructor(page: Page) {
        this.page = page;
    }

    async sort() {
      

        await this.page.locator('[data-test="product_sort_container"]').selectOption('za');
        await this.page.locator('[data-test="product_sort_container"]').selectOption('lohi');
        await this.page.locator('[data-test="product_sort_container"]').selectOption('hilo');
        

        
    }
}