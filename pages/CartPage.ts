import { Page, expect } from '@playwright/test';
import { cartComponent } from '../components/cartComponent';

export class CartPage {
    page: Page;
    cart: cartComponent;

    readonly cartItem = '.cart_item';
    readonly cartList = '.cart_list';
    readonly summaryLabel = '.summary_subtotal_label';
    readonly expectedProductsDescription = ['Backpack', 'Bike Light', 'Fleece Jacket', 'Onesie', 'Test.allTheThings() T-Shirt (Red)'];

    constructor(page: Page) {
        this.page = page;
        this.cart = new cartComponent(this.page);
    };

    async checkOutFlow() {
        await this.cart.addToCart();
        await this.cart.removeBoltTShirt();
        await this.cart.proceedToCheckout();
    };

    async addToCartFromItemPage() {
        await this.cart.handleProductFromItemPage();
    };

    async checkOutVerification() {
        const orderText = await this.page.locator(this.cartList).innerText();
        const allExpectedProductsIncluded = this.expectedProductsDescription.every(product => orderText.includes(product));
        expect(allExpectedProductsIncluded).toBe(true);

        const pricesArray = orderText.match(/\$\d+\.\d+/g);
        const totalPrice = pricesArray ? pricesArray.reduce((acc, price) => acc + parseFloat(price.replace('$', '')), 0).toFixed(2) : 0.00;

        const subtotalElement = await this.page.locator(this.summaryLabel);
        const subtotalText = await subtotalElement.innerText();
        const matchResult = subtotalText.match(/\d+\.\d+/);
        if (matchResult !== null) {
            const itemTotalText = parseFloat(matchResult[0]).toFixed(2);
            expect(totalPrice).toBe(itemTotalText);
        } else {
            console.error("Null");
        }
    };

    async addToCartFromItemPageVerification() {
        const cartItemVisible = await this.page.locator(this.cartItem).isVisible();
        expect(cartItemVisible).toBe(false);
    };
};
