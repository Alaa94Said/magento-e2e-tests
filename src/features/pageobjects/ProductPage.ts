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

  get cartSuccessMessage() {
    return $('div.message-success.success.message div=You added');
  }
  

  // Actions
  selectFirstProduct() {
    Logger.info('product Page',"Selecting first product from search results");
    const first = $('li.product-item a.product-item-link');
    first.click();
  }

  async chooseSizeAndColor() {
    Logger.info('product Page',"Choosing size and color");
    const size = $('#option-label-size-143-item-170');
    const color = $('div.swatch-attribute.color div[option-label]');
    if (await size.isExisting()) size.click();
    if (await color.isExisting()) color.click();
  }

  async addToCart() {
    Logger.info('product Page', "Clicking Add to Cart");
    await this.addToCartButton.waitForDisplayed();
    await this.addToCartButton.waitForClickable();
    await this.addToCartButton.click();
    
  }

  async isProductAddedToCart(): Promise<boolean> {
    try {
        // Wait until the success message is displayed
        await this.cartSuccessMessage.waitForDisplayed({ timeout: 5000 });
        
        // Check if the success message is displayed
        const visible = await this.cartSuccessMessage.isDisplayed();
        Logger.info('product Page', `Cart success message visible: ${visible}`);
        return visible;
    } catch (error) {
        Logger.error('product Page',`Cart success message not visible: ${error}`);
        return false;
    }
  }
  

}

export default  ProductPage;
