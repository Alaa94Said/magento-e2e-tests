import { $ } from '@wdio/globals';
//import { Logger } from '../../utils/logger';

// utils/logger.ts
import logger from '@wdio/logger';
const chalk = require('chalk');
console.log(chalk.gray('This is gray text'));

export const Logger = logger('CartPage');


export default class CartPage {
  
  async openCart() {
    const cartLink = await $("//a[contains(@class, 'showcart')]/span[text()='My Cart']");
await cartLink.click();

    
    //await $('a.action.showcart').click();
  
  }

  async proceedToCheckout() {
    const checkoutButton = await $('#top-cart-btn-checkout');
  await checkoutButton.waitForDisplayed({ timeout: 10000 });
  await checkoutButton.waitForClickable({ timeout: 10000 });
  await checkoutButton.scrollIntoView();
  await browser.pause(500); 
  await checkoutButton.click();
    Logger.info('"Proceed to Checkout" clicked.');
  }
}
