import Page from './page';
import { $ } from '@wdio/globals';
import { Logger } from '../../utils/logger';

export default class HomePage extends Page {
  get searchInput() { return $('#search'); }
  get searchButton() { return $('.action.search'); }
  get heroBanner() { return $('div.block-promo'); }

  async searchForProduct(productName: string) {
    Logger.info(`Searching for product: ${productName}`);
    await this.searchInput.setValue(productName);
    await this.searchButton.click();
  }


  async isHomePageTitleVisible(): Promise<boolean> {
    try {
        const homePageTitle = await $('span.base[data-ui-id="page-title-wrapper"]');
        
        const isVisible = await homePageTitle.isDisplayed();
        await homePageTitle.waitForDisplayed({ timeout: 5000 });

        Logger.info(`Home Page title visible: ${isVisible}`);
        return isVisible;
    } catch (error) {
        Logger.error(`Failed to check Home Page title visibility: ${error}`);
        return false;
    }
}

  open() {
    Logger.info('Opening Home Page');
    return super.open('/');
  }
}
