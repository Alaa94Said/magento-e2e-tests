import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from 'pageobjects/HomePage';
import SearchPage from 'pageobjects/SearchPage';
import { expect } from 'expect-webdriverio';
import { Logger } from '../../utils/logger';
import './homepage.steps'; 

const homePage = new HomePage();
const searchPage = new SearchPage();

When(/^I search for "(.+)"$/, async (searchTerm: string) => {
  browser.pause(10000);
  await searchPage.searchFor(searchTerm);
});

Then('Results should be shown', async () => {

  const hasResults = await searchPage.isToolbarAmountVisible();
  expect(hasResults).toBe(true);
});


