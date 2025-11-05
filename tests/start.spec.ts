import { test, expect } from '@playwright/test';

const urlPrefix = 'https://www.saucedemo.com/';

test('powinien zalogować użytkownika', async ({ page }) => {
  // 1. Otwórz stronę logowania
  await page.goto(`${urlPrefix}v1`);

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
//   await page.click('a[id="logout_sidebar_link"]');

  await page.getByRole('button', { name: 'ADD TO CART' }).nth(0).click(); //znajdź buttony które mają name = add to cart i klikj pierwszy

  await page.locator('.inventory_item', { has: page.locator('.inventory_item_name', { hasText: 'Sauce Labs Onesie' }) }).locator('button', { name: 'ADD TO CART' }).click();

 await page.click('.shopping_cart_link');

 await page.locator('.cart_item', { has: page.locator('.inventory_item_name', { hasText: 'Sauce Labs Backpack' }) }).locator('button', { name: 'Remove' }).click();

 await page.click('button[name="checkout"]');

 await page.fill('[name="firstName"]', 'Marcin');

 await page.fill('[name="lastName"]', 'Piotrowski');

 await page.fill('[name="postalCode"]', '01-905');

 await page.click('input[name="continue"]');

 await expect(page.locator('.cart_item')).toHaveCount(1);

 await expect(page.locator('.summary_subtotal_label')).toContainText('Item total: $7.99');
 
 await page.click('button[name="finish"]');
 
 await expect(page.locator('.complete-header')).toContainText('Thank you for your order!');

 await page.locator('button:has-text("Back Home")').click();
 
 await expect(page.getByText('Swag Labs')).toBeVisible();
 
 //komentarz tylko po to żeby zeobić commit
 
 
 
 
 
 
 await page.waitForTimeout(5000);



//   await page.waitForTimeout(3000);
});




// C:\Users\wladyslaw.kowalski_b\playwright-test\kowalski-test-001>npx playwright test tests/start.spec.ts --headed
