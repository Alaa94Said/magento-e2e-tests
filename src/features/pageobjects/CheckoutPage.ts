import Page from './page';
import { $, $$ } from '@wdio/globals';
import chalk from 'chalk';

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


  async fillShippingDetails(details: ShippingInfo): Promise<void> {
 
    await $('#customer-email').setValue(details.email);
    await $('#SNET33I').setValue(details.firstName);
    await $('#R445Y4E').setValue(details.lastName);
    await $('#AUXXRVB').setValue(details.street);
    await $('#HO2QS7L').setValue(details.city);
    await $('#RU2SBTA').selectByVisibleText(details.region);
    await $('#QIMDHXH').setValue(details.zip);
    await $('#UPFO34G').selectByVisibleText(details.country);
    await $('#J2MGYY7').setValue(details.phone);

    const shippingMethod = await $('input[type=radio][name="ko_unique_1"]');
    await shippingMethod.waitForClickable({ timeout: 5000 });
    await shippingMethod.click();
  }

  async continueToPayment(): Promise<void> {
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
