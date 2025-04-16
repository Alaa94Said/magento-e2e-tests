Feature: Guest Checkout

  Scenario: Checkout product as guest
    Given I have a product in my cart
    When I proceed to checkout
    And I fill in the shipping information
    Then I should reach the payment page
