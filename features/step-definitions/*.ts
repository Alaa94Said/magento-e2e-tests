import { Given, Then } from '@wdio/cucumber-framework';
import HomePage from '../../src/pages/HomePage';

const homePage = new HomePage();

Given('I open the home page', () => {
  homePage.open();
});

Then('the hero banner should be visible', () => {
  expect(homePage.isHeroBannerVisible()).toBe(true);
});
