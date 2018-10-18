@Computer
Feature: To validate CRUD operations in computers database

    Scenario: Create computer
        Given I go to computers result page
        When I click on add computer button
        And Set data to create computer
        And Click on create this computer button
        Then Validates that create computer success message is shown

     Scenario: Search created computer
         Given I go to computers result page
         When I search for previous created computer
         Then The created computer should be shown in result table
         When Click on first computer name on result table
         Then Validates that created computer data is the same

    Scenario: Edit created computer
        Given I go to computers result page
        And I search for previous created computer
        When Click on first computer name on result table
        And Set data to update computer
        And Click on save this computer button
        Then Validates that update computer success message is shown

    Scenario: Search updated computer
        Given I go to computers result page
        When I search for previous updated computer
        Then The updated computer should be shown in result table
        When Click on first computer name on result table
        Then Validates that updated computer data is the same

    Scenario: Delete updated computer
        Given I go to computers result page
        And I search for previous updated computer
        And Click on first computer name on result table
        When Click on delete button
        Then Validates that delete computer success message is shown