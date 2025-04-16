import { Logger } from '../utils/logger';

export default class ProductPage {
  selectFirstProduct() {
    Logger.info("Selecting first product from search results");
    const first = $('li.product-item a.product-item-link');
    first.click();
  }

  async chooseSizeAndColor() {
    Logger.info("Choosing size and color");
    const size = $('div.swatch-attribute.size div[option-label]');
    const color = $('div.swatch-attribute.color div[option-label]');
    if (await size.isExisting()) size.click();
    if (await color.isExisting()) color.click();
  }

  clickAddToCart() {
    Logger.info("Clicking Add to Cart");
    $('button#product-addtocart-button').click();
  }

  get cartSuccessMessage() {
    return $('.message-success');
  }

  async isProductAddedToCart(): Promise<boolean>  {
    return await this.cartSuccessMessage.isDisplayed();
  }
}
