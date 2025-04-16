import { When, Then } from '@wdio/cucumber-framework';
import { expect } from 'expect-webdriverio';
import CategoryPage from '../../src/pages/CategoryPage';

const categoryPage = new CategoryPage();

When('I navigate to the Jackets category', () => categoryPage.navigateToJackets());

Then('I should see jackets listed', () => {
  expect(categoryPage.hasProducts()).toBe(true);
});
