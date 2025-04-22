import Page from './page';
import { $, $$ } from '@wdio/globals';
import chalk from 'chalk';
import { Logger } from '../../utils/logger';

console.log(chalk.gray('CheckoutPage initialized'));

type ShippingInfo = {
  email:string;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  region: string;
  zip: string;
  country: string;
  phone: string;
};

export class CheckoutPage extends Page {
  // Guest checkout
  get guestEmailInput() {
     this.guestEmailInput.waitForExist({ timeout: 10000 });

     $('input[type="email"]').waitForClickable({ timeout: 10000 });
    return $('input[type="email"]');
  }

  get continueToShippingButton() {
    return $('button.continue');
  }
  get emailField() {
    return $('//input[@id="customer-email"]');
  }
  
  get firstNameField() {
    return $('[name="firstname"]');
  }
  
  get lastNameField() {
    return $('[name="lastname"]');  
  }
  
  get streetField() {
    return $('[name="street[0]"]');
  }
  
  get cityField() {
    return $('[name="city"]');
  }
  
  get regionDropdown() {
    return $('[name="region_id"]');
  }
  
  get zipField() {
    return $('[name="postcode"]');
  }
  
  get countryDropdown() {
    return $('[name="country_id"]');
  }
  
  get phoneField() {
    return $('[name="telephone"]');
  }
  
  get shippingMethodRadio() {
    return $('input[type=radio][name="ko_unique_1"]');
  }
  
  async fillShippingDetails(details: ShippingInfo): Promise<void> {
    await $('.loading-mask').waitForDisplayed({ reverse: true, timeout: 15000 });
    await this.emailField.setValue(details.email);
    await this.firstNameField.setValue(details.firstName);
    await this.lastNameField.setValue(details.lastName);
    await this.streetField.setValue(details.street);
    await this.cityField.setValue(details.city);
    await this.regionDropdown.selectByVisibleText(details.region);
    await this.zipField.setValue(details.zip);
    await this.countryDropdown.selectByVisibleText(details.country);
    await this.phoneField.setValue(details.phone);
  
    await this.shippingMethodRadio.waitForClickable({ timeout: 5000 });
    await this.shippingMethodRadio.click();

    const shippingMethod = await $('input[type=radio][name="ko_unique_1"]');
    await shippingMethod.waitForClickable({ timeout: 5000 });
    await shippingMethod.click();
  }

  async continueToPayment(): Promise<void> {
    const nextBtn =  $('button.continue');
    await nextBtn.waitForClickable({ timeout: 5000 });
    await nextBtn.click();
  }

  async placeOrderButtonVisible(): Promise<boolean> {
    return await $('button.checkout').isDisplayed();
  }

  async isOnPaymentPage(): Promise<boolean> {
    return (await browser.getUrl()).includes('/checkout/#payment');
  }

  async placeOrder(): Promise<void> {
    const placeOrderBtn = await $('button.checkout');
    await placeOrderBtn.waitForClickable({ timeout: 10000 });
    await placeOrderBtn.click();
  }

  open() {
    return super.open('/checkout');
  }

}

export default CheckoutPage;
