Feature: Add to Cart

  Scenario: Add a product to cart

      Given I open the home page
    Then the home banner should be visible
    When I search for "jacket"
    Then Results should be shown
    When I select a product from results
    And I choose size and color
    And I add it to the cart
    And I proceed to the cart page
    Then the cart should show the product