import { Given, When, Then } from '@wdio/cucumber-framework';
import CartPage from 'pageobjects/CartPage';
import CheckoutPage from 'pageobjects/CheckoutPage';
import ProductPage from 'pageobjects/ProductPage';
import SearchPage from 'pageobjects/SearchPage';
import { expect } from 'expect-webdriverio';
//import { Browser } from 'webdriverio';
import { browser } from '@wdio/globals';
const chalk = require('chalk');
console.log(chalk.gray('This is gray text'));

const cart = new CartPage();
const checkout = new CheckoutPage();
const product = new ProductPage();
const search = new SearchPage();

Given('I have a product in my cart', () => {
  browser.url('/');
  search.searchFor('jacket');
  product.selectFirstProduct();
  product.chooseSizeAndColor();
  product.addToCart();
  browser.pause(1000);
});

When('I proceed to checkout', () => {
  cart.openCart();
  browser.pause(1000);
  cart.proceedToCheckout();
});

When('I fill in the shipping information', () => checkout.fillShippingInfo());

Then('I should reach the payment page', async () => {
  await browser.pause(5000); // optional, just for timing
  const isVisible = await checkout.placeOrderButtonVisible();
  expect(isVisible).toBe(true);
}); 

/* Then('I should reach the payment page', async () => {
  expect(await checkout.isOnPaymentPage()).toBe(true);
}); */
