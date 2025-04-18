import { Given, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/HomePage';
import { expect } from 'expect-webdriverio';

const homePage = new HomePage();

Given('I open the home page', () => {
  homePage.open();
});

Then('the home banner should be visible', async () => {
  
  expect(await homePage.isHomePageTitleVisible()).toBe(true);
});
