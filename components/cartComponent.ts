import { Page } from '@playwright/test';

export class cartComponent {
    page: Page;

    readonly addToCartItems = {
        backpack: '[data-test="add-to-cart-sauce-labs-backpack"]',
        bikeLight: '[data-test="add-to-cart-sauce-labs-bike-light"]',
        boltTShirt: '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
        fleeceJacket: '[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
        onesie: '[data-test="add-to-cart-sauce-labs-onesie"]',
        redTShirt: '[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]'
    };

    readonly cartItemCountSelector = '#shopping_cart_container a';
    readonly removeBoltTShirtButton = '[data-test="remove-sauce-labs-bolt-t-shirt"]';
    readonly cartItemCountAfterRemovalSelector = 'a:has-text("5")';
    readonly checkoutButton = '[data-test="checkout"]';
    readonly firstNameInput = '[data-test="firstName"]';
    readonly lastNameInput = '[data-test="lastName"]';
    readonly postalCodeInput = '[data-test="postalCode"]';
    readonly continueButton = '[data-test="continue"]';
    readonly finishButton = '[data-test="finish"]';
    readonly backToProductsButton = '[data-test="back-to-products"]';
    readonly checkoutCompleteContainerLocator = '#checkout_complete_container';
    readonly backpackPageItemSelector = 'text=backpack';
    readonly cartItem = '.cart_item';

    constructor(page: Page) {
        this.page = page;
    };

    async addToCart() {
        await this.page.locator(this.addToCartItems.backpack).click();
        await this.page.locator(this.addToCartItems.bikeLight).click();
        await this.page.locator(this.addToCartItems.boltTShirt).click();
        await this.page.locator(this.addToCartItems.fleeceJacket).click();
        await this.page.locator(this.addToCartItems.onesie).click();
        await this.page.locator(this.addToCartItems.redTShirt).click();
        await this.page.locator(this.cartItemCountSelector).click();
    };

    async goToItemPage() {
        await this.page.locator(this.backpackPageItemSelector);
    };

    async addToCarFromPageItem() {
        await this.page.locator(this.addToCartItems.backpack);
    };

    async removeBoltTShirt() {
        await this.page.locator(this.removeBoltTShirtButton).click();
        await this.page.locator(this.cartItemCountAfterRemovalSelector).click();
    };

    async proceedToCheckout() {
        await this.page.locator(this.checkoutButton).click();
        await this.page.locator(this.firstNameInput).fill('Johnny');
        await this.page.locator(this.lastNameInput).fill('Tester');
        await this.page.locator(this.postalCodeInput).fill('007');
        await this.page.locator(this.continueButton).click();
    };

    async finishCheckout() {
        await this.page.locator(this.finishButton).click();
    };

    async handleProductFromItemPage() {
        await this.page.locator(this.backpackPageItemSelector).click();
        await this.page.locator(this.addToCartItems.fleeceJacket).click();
        await this.page.locator(this.cartItemCountSelector);

    };
};

