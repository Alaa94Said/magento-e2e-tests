import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/HomePage';
import { expect } from 'expect-webdriverio';

const homePage = new HomePage();

Given(/^I open the home page$/, async () => {
  console.log('Navigating to home page...');
  homePage.open();

});

Then('the home banner should be visible', async () => {
  
  expect(await homePage.isHomePageTitleVisible()).toBe(true);
});


