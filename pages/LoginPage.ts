import { Page, expect } from '@playwright/test';

export class LoginPage {
    page: Page;

    readonly loginErrorMessageSelector = '#login_button_container > div > form > div.error-message-container.error';

    constructor(page: Page) {
        this.page = page;
    };

    async login(username: string, password: string) {
        await this.page.goto('https://www.saucedemo.com/');
        await this.page.locator('[data-test="username"]').fill(username);
        await this.page.locator('[data-test="password"]').fill(password);
        await this.page.locator('[data-test="login-button"]').click();
    };

    async loginErrorUserVerification() {
        const isVisible = await this.page.locator('[data-test="error"]').isVisible();
        await expect(isVisible).toBe(true);
    };
};
