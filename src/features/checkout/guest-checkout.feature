Feature: Guest Checkout

Scenario: Add product to cart and proceed to checkout

    Given I open the home page
    Then the home banner should be visible
    When I search for "jacket"
    Then Results should be shown
    When I select a product from results
    And I choose size and color
    And I add it to the cart
    And I proceed to the cart page
    Then the cart should show the product
    When I proceed to checkout
    And I fill in my shipping details
    And I place the order
    Then the order should be placed successfully