export default class CheckoutPage {
    fillShippingInfo() {
      $('input[name=firstname]').setValue('John');
      $('input[name=lastname]').setValue('Doe');
      $('input[name=street\\[0\\]]').setValue('123 Test Street');
      $('input[name=city]').setValue('Testville');
      $('select[name=region_id]').selectByIndex(1);
      $('input[name=postcode]').setValue('12345');
      $('select[name=country_id]').selectByVisibleText('United States');
      $('input[name=telephone]').setValue('1234567890');
    }
  
    async placeOrderButtonVisible(): Promise<boolean> {
      return await $('button.checkout').isDisplayed();
    }
  }
  