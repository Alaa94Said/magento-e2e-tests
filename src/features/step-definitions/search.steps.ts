import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from 'pageobjects/HomePage';
import SearchPage from 'pageobjects/SearchPage';
import { expect } from 'expect-webdriverio';

const homePage = new HomePage();
const searchPage = new SearchPage();

Given('I open the home page', () => homePage.open());

When('I search for {string}', (term) => searchPage.searchFor(term));

Then('Results should be shown', () => {
  browser.pause(10000);
  const hasResults = searchPage.hasResults();
  expect(hasResults).toBe(true);
  
});
