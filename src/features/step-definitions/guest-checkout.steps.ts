import { Given, When, Then } from '@wdio/cucumber-framework';
import { CartPage } from '../pageobjects/CartPage';  // Correct named import
import { CheckoutPage } from '../pageobjects/CheckoutPage';
import HomePage from 'pageobjects/HomePage';
import SearchPage from 'pageobjects/SearchPage';
import ProductPage from 'pageobjects/ProductPage';
import './add-to-cart.steps'; 

const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();
const search = new SearchPage();
const cart = new CartPage();
const productPage = new ProductPage();

let selectedProductName: string; 

const homePage = new HomePage();
const searchPage = new SearchPage();
 

When('I proceed to checkout', async () => {
  await cartPage.proceedToCheckout();
});

When('I fill in my shipping details', async () => {
  // Fill in shipping details in the checkout page
  await checkoutPage.fillShippingDetails({
    email: 'alaa76@gmail.com',
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
  const confirmation = await $('[data-ui-id="page-title-wrapper"]').getText();
  expect(confirmation).toContain('Checkout');
});
