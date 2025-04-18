import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from 'expect-webdriverio';
import CategoryPage from 'pageobjects/CategoryPage';

const categoryPage = new CategoryPage();

Given('I open the home page', async () => {
  await browser.url('/');
});

When('I navigate to the Jackets category', () => categoryPage.navigateToJackets());


Then('I should see jackets listed', async () => {
  expect(await categoryPage.hasProducts()).toBe(true);
});
