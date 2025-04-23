import { Given, When, Then } from '@wdio/cucumber-framework';
import ProductPage from 'pageobjects/ProductPage';
import { expect } from 'expect-webdriverio';
import SearchPage from 'pageobjects/SearchPage';
import CartPage from 'pageobjects/CartPage';
import HomePage from 'pageobjects/HomePage';

import './homepage.steps'; 
import './search.steps'; 

const search = new SearchPage();
const cart = new CartPage();
const productPage = new ProductPage();

let selectedProductName: string; 

/* Given('I search for "jacket"', () => {
  browser.url('/');
  search.searchFor('jacket');
});

When(/^I search for "(.+)"$/, async (searchTerm: string) => {
  await search.searchFor(searchTerm);
});
 */
const homePage = new HomePage();
const searchPage = new SearchPage();


When('I select a product from results', async () => {
  selectedProductName = await productPage.selectFirstProduct(); // Store the product name
});

When('I choose size and color', async () => {
  await productPage.chooseSizeAndColor();
});

When('I add it to the cart', async () => {
  await productPage.addToCart();
  browser.pause(10000); 
});

When('I proceed to the cart page', async () => {
  await browser.url('/checkout/cart');
});

Then('the cart should show the product', async () => {
  const isProductInCart = await cart.getProductName(selectedProductName); // Use the dynamic product name
  console.info('[Cart Check] Is product in cart?', isProductInCart);
  expect(isProductInCart).toBe(true);
  

});
