import Page from './page';
import { $, $$ } from '@wdio/globals';
import { Logger } from '../../utils/logger';


class CategoryPage extends Page {
  // Selectors
  get categoryList() {
    return $$('.category-item');
  }

  get productItems() {
    return $('li.product');
  }

  // Actions
  async clickOnCategory(name: string) {
    Logger.info('CategoryPage', `Attempting to click on category: '${name}'`);
    const category = await $(`=${name}`);
    await category.click();
    Logger.info('CategoryPage', `Clicked on category: '${name}'`);
  }

  async navigateToJackets() {
    Logger.info('CategoryPage', `Navigating through menu: 'Women > Tops > Jackets'`);

    const womenMenu = await $('#ui-id-4');
    await womenMenu.moveTo();
    Logger.debug('CategoryPage', `Hovered over 'Women' menu`);

    const topsSubMenu = await $('#ui-id-9'); 
    await topsSubMenu.moveTo();
    Logger.debug('CategoryPage', `Hovered over 'Tops' submenu`);

    const jacketsLink = await $('#ui-id-11');
    await jacketsLink.waitForClickable({ timeout: 5000 });
    await jacketsLink.click();
    Logger.info('CategoryPage', `Clicked on 'Jackets' link`);
  }

  async hasProducts(): Promise<boolean> {
    Logger.info('CategoryPage', 'Checking for products on the page');
    const products = await $$('li.product');
    const hasItems = await products.length > 0;
    Logger.debug('CategoryPage', `Found ${products.length} products`);
    return hasItems;
  }
}

export default CategoryPage;