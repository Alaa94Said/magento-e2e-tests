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
    //console.log('Product title:', productName);
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
    Logger.info('product Page', "Add to Cart is clicked");
  }

  async isProductAddedToCart(): Promise<boolean> {
    try {
           // Get the text of the success message
          const messageText = await this.successMessage.getText();
  
           // Check if the success message contains "You added" text
          expect(messageText).toContain('You added');
        // Check if the success message is displayed
        const visible = await this.successMessage.isDisplayed();
        Logger.info('product Page', `Cart success message visible: ${visible}`);
        return visible;
    } catch (error) {
        Logger.error('product Page',`Cart success message not visible: ${error}`);
        return false;
    }

  
  }
  

}

export default  ProductPage;
