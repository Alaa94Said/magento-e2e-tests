import { Logger } from '../utils/logger'; 
import { $ } from '@wdio/globals';

Logger.log('This is a log message');
Logger.info('This is an info message');
Logger.warn('This is a warning message');
Logger.error('This is an error message');
Logger.debug('This is a debug message');

export default class HomePage {
  open() {
    Logger.info("Opening Home Page");
    browser.url('/');
  }

  get heroBanner() {
    return $('div.block-promo');
  }

  async isHeroBannerVisible(): Promise<boolean> {
    const visible = await this.heroBanner.isDisplayed();
    Logger.info(`Hero Banner visible: ${visible}`);
    return visible;
  }
  
}
