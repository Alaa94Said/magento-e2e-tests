import { Logger } from '../../utils/logger';
import { $, $$ } from '@wdio/globals';

export default class SearchPage {
  get searchInput() { return $('#search'); }
  get searchButton() { return $('button.action.search'); }
  get filterSidebar() { return $('div.filter-options'); }

  async searchFor(productName: string) {
    Logger.info(`Searching for product: ${productName}`);

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

    // Optionally, wait for the results to appear or the page to load fully
    await browser.waitUntil(
      async () => await this.isResultsFiltered(),
      { timeout: 10000, timeoutMsg: 'Search results did not load in time' }
    );
  }

  async applyPriceFilter() {
    Logger.info("Applying price filter");

    // Wait for the filter sidebar to appear before clicking
    await this.filterSidebar.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Filter sidebar did not display in time' });

    const priceFilter = $('//div[@class="filter-options"]//div[text()="Price"]');
    await priceFilter.click();

    const firstRange = $('//div[@class="filter-options-content"]//a[contains(text(),"$20.00 - $29.99")]');
    if (await firstRange.isDisplayed()) {
      await firstRange.click();
    }
  }

  async isResultsFiltered(): Promise<boolean> {
    // Wait for at least one product to be displayed
    const productList = await $$('li.product');
    return await productList.length > 0;
  }
}
