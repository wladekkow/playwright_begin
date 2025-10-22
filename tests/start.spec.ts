import { test, expect } from '@playwright/test';

test('powinien zalogować użytkownika', async ({ page }) => {
  // 1. Otwórz stronę logowania
  await page.goto('https://www.saucedemo.com/v1/');

  // 2. Wpisz login i hasło
  await page.fill('input[name="user-name"]', 'standard_user');
  await page.fill('input[name="password"]', 'secret_sauce');

  // 3. Kliknij przycisk "Zaloguj"
  await page.click('input[type="submit"]');

  // 4. Oczekuj, aż pojawi się np. komunikat "Witaj"
  await expect(page.locator('text=Products')).toBeVisible(); //jakiś obiekt który ma text Products i jest widoczny
  await expect(page).toHaveTitle(/Swag Labs/); //tytuł strony

//   await page.click('div[class=bm-burger-button]');
//   await page.getByRole('button', { name: 'Open Menu' }).click();

  await page.getByRole('button', { name: 'ADD TO CART' }).nth(0).click();

  await page.waitForTimeout(10000);

//   await page.click('a[id="logout_sidebar_link"]');

//   await page.waitForTimeout(3000);
});

