import { Given, When, Then } from '@wdio/cucumber-framework';
import CartPage from '../../src/pages/CartPage';
import CheckoutPage from '../../src/pages/CheckoutPage';
import ProductPage from '../../src/pages/ProductPage';
import SearchPage from '../../src/pages/SearchPage';
import { expect } from 'expect-webdriverio';
//import { Browser } from 'webdriverio';
import { browser } from '@wdio/globals';


const cart = new CartPage();
const checkout = new CheckoutPage();
const product = new ProductPage();
const search = new SearchPage();

Given('I have a product in my cart', () => {
  browser.url('/');
  search.searchFor('jacket');
  product.selectFirstProduct();
  product.chooseSizeAndColor();
  product.clickAddToCart();
  browser.pause(1000);
});

When('I proceed to checkout', () => {
  cart.openCart();
  cart.proceedToCheckout();
});

When('I fill in the shipping information', () => checkout.fillShippingInfo());

Then('I should reach the payment page', () => {
  browser.pause(5000);
  expect(checkout.placeOrderButtonVisible()).toBe(true);
});
