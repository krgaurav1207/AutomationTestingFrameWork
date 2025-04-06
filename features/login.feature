Feature: Login Action

    As a user
    I want to Login into applicatiom

    Scenario: Login with valid credentials
        Given I visit a login page
        When I fill the login form with valid credentials
        Then I should see the home page

    Scenario Outline: Try to login with invalid credentials
        Given I visit a login page
        When I fill the login form with '<username>' and '<password>'
        Then I wait for 3 seconds

        Examples:
            | username | password |
            | user1    | pass1    |
            | user2    | pass2    |
            | user3    | pass3    |
            | user4    | pass4    |
            | user5    | pass5    |
            | user6    | pass6    |