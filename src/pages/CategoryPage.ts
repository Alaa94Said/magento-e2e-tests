import { $ } from '@wdio/globals';

export default class CategoryPage {
    navigateToJackets() {
      $('a.level-top[aria-label="Women"]').moveTo();
      $('a[href*="women/tops-women/jackets-women"]').click();
    }
  
    get productItems() {
      return $('li.product');
    }
  
    async hasProducts(): Promise<boolean> {
      const products = await $$('li.product');
      return await products.length > 0;
    }
    
  }
  