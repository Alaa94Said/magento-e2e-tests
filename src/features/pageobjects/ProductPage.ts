import Page from './page';
import { $ } from '@wdio/globals';
import { Logger } from '../../utils/logger';

class ProductPage extends Page {
  // Elements
  get addToCartButton() {
    return $('#product-addtocart-button'); 
  }

  get productTitle() {
    return $('h1.page-title');
  }

  get successMessage() {

    return $('.message-success.success.message');
  }
  

  // Actions
  async selectFirstProduct(): Promise<string> {
    const firstProductLink = await $('div.product-item-info a'); 
    await firstProductLink.click();
    const titleElement = await $('[data-ui-id="page-title-wrapper"]');
    const productName = await titleElement.getText();
    Logger.info('product page','first selected product name is :'+productName)
    return productName; 
  }

  async chooseSizeAndColor() {
    Logger.info('product Page',"Choosing size and color");
    const size = $('#option-label-size-143-item-170');
    const color = $('div.swatch-attribute.color div[option-label]');
    if (await size.isExisting()) size.click();
    if (await color.isExisting()) color.click();
  }

  async addToCart() {
    await this.addToCartButton.click();
    browser.pause(10000);
    Logger.info('product Page', "Add to Cart is clicked");
  }

  public async isProductAddedToCart(): Promise<boolean> {
    try {
      const successMessage = await $('.message-success.success.message');
      Logger.info('product Page', "success message dispayed");

      return await successMessage.isDisplayed();
    } catch (err) {
      Logger.error('product Page', `Cart success message not visible: ${err}`);
      return false;
    }
  }
  
  

}

export default  ProductPage;
