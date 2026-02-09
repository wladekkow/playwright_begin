import { expect, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  // readonly baseUrl: string;

  constructor(page: Page) {
    this.page = page;
  }

  // async go_to_page(loginString: string, passwordString: string) {
  //   // 1. Otwórz stronę logowania
  //   await this.page.goto(this.baseUrl);
  // }


  async login_successfully(loginString: string, passwordString: string) {
  await this.fill_credentials_and_submit(loginString, passwordString);
  await this.confirm_login();
}
  async login_without_success(loginString: string, passwordString: string) {
  await this.fill_credentials_and_submit(loginString, passwordString);
}

  async fill_credentials_and_submit(loginString: string, passwordString: string) {
    // 2. Wpisz dane logowania
    await this.page.fill('input[name="user-name"]', loginString);
    await this.page.fill('input[name="password"]', passwordString);
    // 3. Kliknij przycisk "Zaloguj"
    await this.page.click('input[type="submit"]');
}

  async confirm_login() {
// 4. Sprawdź, że logowanie się udało
    await expect(this.page.locator('text=Products')).toBeVisible();
    await expect(this.page).toHaveTitle(/Swag Labs/);
}

  
}