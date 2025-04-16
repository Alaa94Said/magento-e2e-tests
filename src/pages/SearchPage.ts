import { Logger } from '../utils/logger';

export default class SearchPage {
  get searchInput() { return $('#search'); }
  get searchButton() { return $('button.action.search'); }
  get filterSidebar() { return $('div.filter-options'); }

  searchFor(term: string) {
    Logger.info(`Searching for: ${term}`);
    this.searchInput.setValue(term);
    this.searchButton.click();
  }

  async applyPriceFilter() {
    Logger.info("Applying price filter");
    const priceFilter = $('//div[@class="filter-options"]//div[text()="Price"]');
    priceFilter.click();
    const firstRange = $('//div[@class="filter-options-content"]//a[contains(text(),"$20.00 - $29.99")]');
    if (await firstRange.isDisplayed()) firstRange.click();
  }

  async isResultsFiltered(): Promise<boolean>  {
    return await $$('li.product').length > 0;
  }
}
