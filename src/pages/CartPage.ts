import { $ } from '@wdio/globals';

export default class CartPage {
    openCart() {
      $('a.showcart').click();
      $('a.viewcart').waitForClickable();
      $('a.viewcart').click();
    }
  
    proceedToCheckout() {
      $('button.checkout').click();
    }
  }
  