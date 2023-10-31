import { Page } from '@playwright/test';

export class SortPage {
    page: Page;

    readonly sortOptionSelector = '[data-test="product_sort_container"]';
    readonly selectOptionAtoZ = 'az';
    readonly selectOptionZtoA = 'za';
    readonly selectOptionPriceHighToLow = 'hilo';
    readonly selectOptionPriceLowToHigh = 'lohi';
    readonly sortedItemsSelector = '.inventory_item_price';
    readonly sortedElement1Selector = '#inventory_container > div > div:nth-child(1) > div.inventory_item_description';
    readonly sortedElement2Selector = '#inventory_container > div > div:nth-child(2) > div.inventory_item_description';

    constructor(page: Page) {
        this.page = page;
    };

    async sortByNameAtoZ() {
        await this.page.locator(this.sortOptionSelector).selectOption(this.selectOptionAtoZ);
    }

    async sortByNameZtoA() {
        await this.page.locator(this.sortOptionSelector).selectOption(this.selectOptionZtoA);
    };

    async sortByPriceHightoLow() {
        await this.page.locator(this.sortOptionSelector).selectOption(this.selectOptionPriceHighToLow);
    };

    async sortByPriceLowToHigh() {
        await this.page.locator(this.sortOptionSelector).selectOption(this.selectOptionPriceLowToHigh);
    };

    async sortByPriceVerification(): Promise<{ item0, item1 }> {
        const item000 = await this.page.locator(this.sortedItemsSelector).nth(0).textContent();
        const regex = /\s*(\d+(\.\d+)?)/g;
        const item00 = item000?.match(regex);
        const item0 = parseFloat(item00 as unknown as string);

        const item001 = await this.page.locator(this.sortedItemsSelector).nth(1).textContent();
        const item01 = item001?.match(regex);
        const item1 = parseFloat(item01 as unknown as string);

        return { item0, item1 };
    };

    async sortByNameVerification() {
        const inventoryContainer1 = await this.page.locator(this.sortedElement1Selector);
        const textContent1 = await inventoryContainer1.textContent();
        console.log('Element 1: ' + textContent1);

        const inventoryContainer2 = await this.page.locator(this.sortedElement2Selector);
        const textContent2 = await inventoryContainer2.textContent();
        console.log('Element 2: ' + textContent2);

        async function compareElementsAlphabetically() {
            const textContent1 = await inventoryContainer1.textContent() ?? null;
            const textContent2 = await inventoryContainer2.textContent() ?? null;

            if (textContent1 === null) {
                return textContent2 === null ? 0 : -1;
            };

            if (textContent2 === null) {
                return 1;
            };

            const actualTextContent1 = textContent1 || '';
            const actualTextContent2 = textContent2 || '';

            for (let i = 0; i < Math.min(actualTextContent1.length, actualTextContent2.length); i++) {
                const char1 = actualTextContent1[i];
                const char2 = actualTextContent2[i];

                if (char1 !== char2) {
                    return char1.localeCompare(char2);
                };
            };
            return actualTextContent1.length - actualTextContent2.length;
        };

        const result = await compareElementsAlphabetically();
        if (result < 0) {
            console.log('Element 1 comes before Element 2: A to Z');
        } else if (result > 0) {
            console.log('Element 2 comes before Element 1: Z to A');
        } else {
            console.log('Both elements have the same text content.');
        };
    };
};
