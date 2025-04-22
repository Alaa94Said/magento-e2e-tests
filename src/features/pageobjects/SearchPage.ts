import { Logger } from '../../utils/logger';
import { $, $$ } from '@wdio/globals';

export default class SearchPage {
  get searchInput() { return $('#search'); }
  get searchButton() { return $('button.action.search'); }

  get results() {
    return $$('//*[@id="maincontent"]/div[3]/div[1]/div[2]/div[2]/ol'); 
  }

  async searchFor(productName: string) {
    Logger.info('Search Page',`Searching for product: ${productName}`);
    // Wait for the search input to be visible and enabled
    await this.searchInput.waitForDisplayed({ timeout: 10000, timeoutMsg: 'Search input not displayed in time' });
    await this.searchInput.waitForEnabled({ timeout: 10000, timeoutMsg: 'Search input not enabled in time' });
    // Set value in the search input
    await this.searchInput.setValue(productName);

    // Wait for the search button to be displayed and clickable
    await this.searchButton.waitForDisplayed({ timeout: 10000, timeoutMsg: 'Search button not displayed in time' });
    await this.searchButton.waitForClickable({ timeout: 10000, timeoutMsg: 'Search button not clickable in time' });

    // Click the search button
    await this.searchButton.click();
    Logger.info('Search Page',"clicked search button");
  }

  async hasResults(): Promise<boolean> {
    console.log("Checking if the results list has elements...");

    const results = this.results;

    if (!results) {
      console.warn("Results list is undefined or null.");
      return false;
    }

    if (await results.length === 0) {
      console.info("No results found in the DOM.");
      return false;
    }

    console.info(`Found ${results.length} result(s) in the DOM.`);
    return true;
  }
}
  
  

  
  
