import { expect, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly urlPrefix: string;

  constructor(page: Page, urlPrefix: string) {
    this.page = page;
    this.urlPrefix = urlPrefix;
  }

  async login(loginString: string, passwordString: string) {
    // 1. Otwórz stronę logowania
    await this.page.goto(`${this.urlPrefix}v1`);

    // 2. Wpisz dane logowania
    await this.page.fill('input[name="user-name"]', loginString);
    await this.page.fill('input[name="password"]', passwordString);

    // 3. Kliknij przycisk "Zaloguj"
    await this.page.click('input[type="submit"]');

    // 4. Sprawdź, że logowanie się udało
    await expect(this.page.locator('text=Products')).toBeVisible();
    await expect(this.page).toHaveTitle(/Swag Labs/);
  }
}