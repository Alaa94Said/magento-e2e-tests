Feature: Add to Cart

  Scenario: Add a product to cart
    Given I search for "jacket"
    When I select a product from results
    And I choose size and color
    And I add it to the cart
    Then the cart should show the product
