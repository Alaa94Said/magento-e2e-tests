import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from 'pageobjects/HomePage';
import SearchPage from 'pageobjects/SearchPage';
import { expect } from 'expect-webdriverio';
import { Logger } from '../../utils/logger';


const homePage = new HomePage();
const searchPage = new SearchPage();

Given('I open the home page', () => homePage.open());

When('I search for {string}', (term) => searchPage.searchFor(term));

Then('Results should be shown', async () => {
  Logger.info('Test Step', 'Waiting to check for results...');
  await browser.pause(10000); // optional: for debugging, better to replace with waitUntil
  const hasResults = await searchPage.isToolbarAmountVisible();
  expect(hasResults).toBe(true);
});

