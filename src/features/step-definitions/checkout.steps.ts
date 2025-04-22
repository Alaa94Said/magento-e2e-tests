import { Given, When, Then } from '@wdio/cucumber-framework';
import { CartPage } from '../pageobjects/CartPage';  // Correct named import
import { CheckoutPage } from '../pageobjects/CheckoutPage';

const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

Given(/^I am on the product page for "(.+)"$/, async (productName: string) => {
  // Navigate to the specific product page based on the product name
  await browser.url('/neve-studio-dance-jacket.html'); // Hardcoded for demo, can be dynamically handled if necessary
});

When('I add the product to the cart', async () => {
  // Select Size and Color
  await $('#option-label-size-143-item-166').click(); // Select Size
  await $('#option-label-color-93-item-56').click();  // Select Color
  await $('#product-addtocart-button').click();       // Add to Cart
  // Wait for success message
  await $('.message-success').waitForDisplayed();
});

When('I proceed to the cart page', async () => {
  // Navigate to the cart page
  await browser.url('/checkout/cart');
});


When('I proceed to checkout', async () => {
  // Proceed to checkout
  await cartPage.proceedToCheckout();
});

When('I fill in my shipping details', async () => {
  // Fill in shipping details in the checkout page
  await checkoutPage.fillShippingDetails({
    email: 'alaa@gmail.com',
    firstName: 'John',
    lastName: 'Doe',
    street: '123 Elm Street',
    city: 'Springfield',
    region: 'California',
    zip: '90210',
    country: 'United States',
    phone: '5551234567'
  });
  await checkoutPage.continueToPayment(); // Continue to payment page
});

When('I place the order', async () => {
  // Place the order in the checkout page
  await checkoutPage.placeOrder();
});

Then('the order should be placed successfully', async () => {
  // Validate successful order placement
  const confirmation = await $('h1.page-title span').getText();
  expect(confirmation).toContain('Thank you for your purchase!');
});
