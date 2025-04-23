import Page from './page';
import { $, browser } from '@wdio/globals';
import { Logger } from '../../utils/logger';

class ProductPage extends Page {
  // Elements
  get addToCartButton() {
    return $('#product-addtocart-button'); 
  }

  get successMessage() {
    return $('.message-success.success.message');
  }

  // Actions
  async selectFirstProduct(): Promise<string> {
    Logger.info('Product Page', 'Selecting the first product');
    const firstProductLink = $('div.product-item-info a');
    await firstProductLink.click();

    const titleElement = $('[data-ui-id="page-title-wrapper"]');
    const productName = await titleElement.getText();
    Logger.info('Product Page', `Selected product name: ${productName}`);
    return productName;
  }

  async chooseSizeAndColor(): Promise<void> {
    Logger.info('Product Page', 'Choosing size and color');
    const size = $('#option-label-size-143-item-170');
    const color = $('div.swatch-attribute.color div[option-label]');

    if (await size.isExisting()) await size.click();
    if (await color.isExisting()) await color.click();
  }

  async addToCart(): Promise<void> {
    Logger.info('Product Page', 'Clicking "Add to Cart"');
    await this.addToCartButton.click();
    await browser.pause(3000); // Consider replacing with a waitUntil or waitForDisplayed
  }

  async isProductAddedToCart(): Promise<boolean> {
    Logger.info('Product Page', 'Checking if product was added to cart');
    try {
      return await this.successMessage.isDisplayed();
    } catch (err) {
      Logger.error('Product Page', `Success message not visible: ${err}`);
      return false;
    }
  }
}

export default ProductPage;
