import Page from './page';
import { $, $$ } from '@wdio/globals';
const chalk = require('chalk');
console.log(chalk.gray('This is gray text'));

class CheckoutPage extends Page {
  // Guest checkout
  get guestEmailInput() {
    return $('#customer-email');
  }

  get continueToShippingButton() {
    return $('button.continue');
  }

  async continueAsGuest(email: string) {
    await this.guestEmailInput.setValue(email);
    await this.continueToShippingButton.click();
  }

  // Shipping form
async fillShippingInfo() {
  const emailInput = await $('#customer-email');
  await emailInput.waitForExist({ timeout: 10000 });
  await emailInput.setValue('john@example.com');
  await $('#I4OCE5D').setValue('John');
  await $('#B9UAHHX').setValue('Doe');
  await $('#CC9IILB').setValue('123 Test Street');
  await $('#VP7E5KG').setValue('Testville');
  await $('#QEG4TLA').selectByIndex(1);
  await $('#TFC2AQM').setValue('12345');
  await $('#UW02CK2').selectByVisibleText('United States');
  await $('#D7L7PYC').setValue('1234567890');

  // Select shipping method radio button
  const shippingMethod = await $('input[type=radio][name="ko_unique_1"]'); // Adjust selector if needed
  await shippingMethod.waitForClickable({ timeout: 5000 });
  await shippingMethod.click();

  // Optionally click "Next" or "Continue"
  const nextBtn = await $('button.continue');
  await nextBtn.waitForClickable({ timeout: 5000 });
  await nextBtn.click();
}



  async placeOrderButtonVisible(): Promise<boolean> {
    return await $('button.checkout').isDisplayed();
  }
  async isOnPaymentPage(): Promise<boolean> {
    return (await browser.getUrl()).includes('/checkout/#payment');
  }
  

  open() {
    return super.open('/checkout');
  }
}

export default  CheckoutPage;
