import { When, Then } from '@wdio/cucumber-framework';
import ProductPage from '../../src/pages/ProductPage';
import { expect } from 'expect-webdriverio';

const productPage = new ProductPage();

When('I select a product from results', () => productPage.selectFirstProduct());
When('I choose size and color', () => productPage.chooseSizeAndColor());
When('I add it to the cart', () => productPage.clickAddToCart());

Then('the cart should show the product', () => {
  expect(productPage.isProductAddedToCart()).toBe(true);
});
