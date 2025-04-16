Feature: Category Navigation

  Scenario: Navigate to Women > Tops > Jackets
    Given I open the home page
    When I navigate to the Jackets category
    Then I should see jackets listed
