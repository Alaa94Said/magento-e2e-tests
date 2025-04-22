import { Logger } from '../../utils/logger';
import { $, $$ } from '@wdio/globals';

export default class SearchPage {
  get searchInput() { return $('#search'); }
  get searchButton() { return $('button.action.search'); }
  //get filterSidebar() { return $('div.filter-options'); }
  get  dropdown(){return $('//*[@id="sorter"]');}   


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

  async applyPriceFilter() {
    Logger.info('Search Page', "Applying price filter");
  
    // Ensure the dropdown is displayed and clickable
    await this.dropdown.waitForDisplayed({ timeout: 10000, timeoutMsg: 'Dropdown not visible in time' });
    Logger.info('Search Page', "Dropdown is displayed");

    await this.dropdown.waitForClickable({ timeout: 1000, timeoutMsg: 'Dropdown not clickable in time' });
    await this.dropdown.click();
    Logger.info('Search Page', "Dropdown is clicked");
  
    // Select the 'Price' option from the dropdown
    const priceOption = await $('//*[@id="sorter"]/option[2]');
    await priceOption.waitForExist({ timeout: 5000, timeoutMsg: 'Price option not found' });
    await priceOption.click();
    Logger.info('Search Page', "Price filter is clicked");
  
    // Wait for the price range filter to be visible
    const firstRange = await $('//div[@class="filter-options-content"]//a[contains(text(),"$20.00 - $29.99")]');
    await firstRange.waitForDisplayed({ timeout: 10000, timeoutMsg: 'Price range filter not displayed' });
  
    if (await firstRange.isDisplayed()) {
      await firstRange.click();
      Logger.info('Search Page', "Price range filter applied");
    } else {
      Logger.info('Search Page', "Price range filter not visible");
    }
  }
  
  
  

  async isResultsFiltered(): Promise<boolean> {
    const noResultsMsg = await $('//div[@class="message info empty"]');

    if (await noResultsMsg.isDisplayed()) {
      Logger.info('Search Page', 'No products found after filter');
      return false;
    }
    
    Logger.info('Search Page', 'Filtered results found');
    return true;
    
    
    
  }
  
  
  
  
}
