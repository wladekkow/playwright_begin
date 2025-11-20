import { expect, Page } from '@playwright/test';

export class LogoutPage {
  readonly page: Page;


  constructor(page: Page) {
    this.page = page;

  }

  async logout() {
   await this.page.click('div[class=bm-burger-button]');
  // await this.page.getByRole('button', { name: 'Open Menu' }).click();
   await this.page.click('a[id="logout_sidebar_link"]');

   await expect(this.page.getByText("Login")).toBeVisible();
   await expect(this.page.locator('#login-button')).toBeVisible();
   }
}
