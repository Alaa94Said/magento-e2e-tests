// CartPage.ts
import { $, $$ } from '@wdio/globals';
import Page from './page';
import chalk from 'chalk';
import { Logger } from '../../utils/logger';


console.log(chalk.gray('CartPage initialized'));

 export class CartPage extends Page { 
  get cartTitle() {
    return $('h1.page-title span');
  }

  get checkoutButton() {
    return $('[data-role="proceed-to-checkout"]');
  }

  async getProductName(expectedName: string): Promise<boolean> {
    // Locate the product name inside the table
    const productNameElement = await $('td .product-item-name a');
    // Get the text of the product name
    const productName = await productNameElement.getText();
    // Return true if the product name matches the expected name, otherwise false
    return productName === expectedName;
  }
  
 
  async proceedToCheckout(): Promise<void> {
    await this.checkoutButton.waitForClickable({ timeout: 5000 });
    await this.checkoutButton.click();
    Logger.info('Cart Page',"proceed to check out clicked");

  }

  async openCart(): Promise<void> {
    await super.open('/checkout/cart');
  }
}
export default  CartPage;
