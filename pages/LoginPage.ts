import { Page, expect } from '@playwright/test';

export class LoginPage {
    page: Page;

    readonly host = 'https://www.saucedemo.com/';
    readonly usernameSelector = '[data-test="username"]';
    readonly passwordSelector = '[data-test="password"]';
    readonly loginButtonSelector = '[data-test="login-button"]';
    readonly loginErrorMessageSelector = '[data-test="error"]';

    constructor(page: Page) {
        this.page = page;
    };

    async login(username: string, password: string) {
        await this.page.goto(this.host);
        await this.page.locator(this.usernameSelector).fill(username);
        await this.page.locator(this.passwordSelector).fill(password);
        await this.page.locator(this.loginButtonSelector).click();
    };

    async loginErrorUserVerification() {
        const isVisible = await this.page.locator(this.loginErrorMessageSelector).isVisible();
        await expect(isVisible).toBe(true);
    };
};
