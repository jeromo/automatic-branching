Feature: Go the the home
  Display the title

  Scenario: Home Page
    Given I am on the home page
    When I do nothing
    Then I should see the title

  Scenario: Call a feature init
    Given I am on the home page
    When I write a repository
    And  I choose branch type feature
    And  I choose status start
    Then I get parameters repository feature start

