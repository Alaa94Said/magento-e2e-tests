Feature: Guest Checkout

Scenario: Add product to cart and proceed to checkout
    Given I am on the product page for "Neve Studio Dance Jacket"
    When I add the product to the cart
    And I proceed to the cart page
    When I proceed to checkout
    And I fill in my shipping details
    And I place the order
    Then the order should be placed successfully