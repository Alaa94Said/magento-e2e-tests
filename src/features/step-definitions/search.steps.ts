import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../../src/pages/HomePage';
import SearchPage from '../../src/pages/SearchPage';
import { expect } from 'expect-webdriverio';

const homePage = new HomePage();
const searchPage = new SearchPage();

Given('I open the home page', () => homePage.open());

When('I search for {string}', (term) => searchPage.searchFor(term));

When('I apply the {string} filter', (type) => {
  if (type === 'Price') searchPage.applyPriceFilter();
});

Then('filtered results should be shown', () => {
  expect(searchPage.isResultsFiltered()).toBe(true);
});
