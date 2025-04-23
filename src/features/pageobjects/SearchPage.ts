import { Logger } from '../../utils/logger';
import { $, $$ } from '@wdio/globals';

export default class SearchPage {
  get searchInput() { return $('#search'); }
  get searchButton() { return $('button.action.search'); }


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

  get toolbarAmount(): ChainablePromiseElement {
    return $('#toolbar-amount');
  }

  async isToolbarAmountVisible(): Promise<boolean> {  
    
    Logger.info('Search Page', 'Checking for toolbar amount visibility...');
  
    const isExisting = await this.toolbarAmount.isExisting();
  
    Logger.info(
      'Search Page',
      `Toolbar amount is ${isExisting ? 'visible' : 'NOT visible'}.`
    );
  
    return isExisting;
  }

  
}
