import { Given, When, Then } from '@wdio/cucumber-framework';
import ProductPage from 'pageobjects/ProductPage';
import { expect } from 'expect-webdriverio';
import SearchPage from 'pageobjects/SearchPage';
import CartPage from 'pageobjects/CartPage';

const search = new SearchPage();
const cart = new CartPage();
const productPage = new ProductPage();

let selectedProductName: string; // Variable to store the product name

Given('I search for "jacket"', () => {
  browser.url('/');
  search.searchFor('jacket');
});

When('I select a product from results', async () => {
  selectedProductName = await productPage.selectFirstProduct(); // Store the product name
});

When('I choose size and color', async () => {
  await productPage.chooseSizeAndColor();
});

When('I add it to the cart', async () => {
  await productPage.addToCart();
  browser.pause(10000); // Wait for the product to be added to the cart
});

When('I proceed to the cart page', async () => {
  await browser.url('/checkout/cart');
});

Then('the cart should show the product', async () => {
  const isProductInCart = await cart.getProductName(selectedProductName); // Use the dynamic product name
  console.info('[Cart Check] Is product in cart?', isProductInCart);
  expect(isProductInCart).toBe(true);
  
/*   browser.pause(10000);
  console.log('[DEBUG] URL during cart check:', await browser.getUrl());
  const isProductAdded = await productPage.isProductAddedToCart(); // Use method from ProductPage
  expect(isProductAdded).toBe(true); */
});
