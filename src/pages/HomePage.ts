import { logger } from '../utils/logger';

export default class HomePage {
  open() {
    logger.info("Opening Home Page");
    browser.url('/');
  }

  get heroBanner() {
    return $('div.block-promo');
  }

  isHeroBannerVisible(): boolean {
    const visible = this.heroBanner.isDisplayed();
    logger.info(`Hero Banner visible: ${visible}`);
    return visible;
  }
}
