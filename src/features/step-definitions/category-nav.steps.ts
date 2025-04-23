import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from 'expect-webdriverio';
import CategoryPage from 'pageobjects/CategoryPage';
import HomePage from '../pageobjects/HomePage';
import './homepage.steps'; 


const categoryPage = new CategoryPage();
const homePage = new HomePage();

/* Given(/^I open the home page$/, async () => {
  console.log('Navigating to home page...');
  homePage.open();

});

Then('the home banner should be visible', async () => {
  
  expect(await homePage.isHomePageTitleVisible()).toBe(true);
}); */

When('I navigate to the Jackets category', () => categoryPage.navigateToJackets());


Then('I should see jackets listed', async () => {
  expect(await categoryPage.hasProducts()).toBe(true);
});
