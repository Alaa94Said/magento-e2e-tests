import { Given, When, Then } from '@wdio/cucumber-framework';
import ProductPage from 'pageobjects/ProductPage';
import { expect } from 'expect-webdriverio';
import SearchPage from 'pageobjects/SearchPage';
import { pause } from 'webdriverio/build/commands/browser';

const search = new SearchPage();

const productPage = new ProductPage();
Given('I search for "jacket"', () => {
  browser.url('/');
  search.searchFor('jacket');})

When('I select a product from results', async () => {
  await productPage.selectFirstProduct();
});

When('I choose size and color', async () => {
  await productPage.chooseSizeAndColor();
});

When('I add it to the cart', async () => {
  await productPage.addToCart();
});

Then('the cart should show the product', async () => {
  const isInCart = await productPage.isProductAddedToCart();
  
  expect(isInCart).toBe(true);

});
