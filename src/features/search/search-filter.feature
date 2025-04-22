Feature: Product Search and Filter

  Scenario: Search for product and apply filter
    Given I open the home page
    When I search for "jacket"
    Then Results should be shown
