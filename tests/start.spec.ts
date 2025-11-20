import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { LogoutPage } from '../pages/logoutPage';


test('e2e zakup 1 rzeczy', async ({ page }) => {

  const urlPrefix = 'https://www.saucedemo.com/';
  const loginPage = new LoginPage(page, urlPrefix);
  const logoutPage = new LogoutPage(page);


  await loginPage.login('standard_user', 'secret_sauce');


  await page.getByRole('button', { name: 'ADD TO CART' }).nth(0).click(); //znajdź buttony które mają name = add to cart i klikj pierwszy

  await page.locator('.inventory_item', { has: page.locator('.inventory_item_name', { hasText: 'Sauce Labs Onesie' }) }).locator('button', { hasText: 'ADD TO CART' }).click();

 await page.click('.shopping_cart_link');

 await page.locator('.cart_item', { has: page.locator('.inventory_item_name', { hasText: 'Sauce Labs Backpack' }) }).getByRole('button', { name: 'Remove' }).click();

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
 
 await page.waitForTimeout(3000);
 
 await logoutPage.logout();
  
 await page.waitForTimeout(3000);

});




// C:\Users\wladyslaw.kowalski_b\playwright-test\kowalski-test-001>npx playwright test tests/start.spec.ts --headed
