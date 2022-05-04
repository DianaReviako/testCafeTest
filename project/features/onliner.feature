Feature: Test onliner.

    @onliner
    Scenario: Test filter.

    Given Onliner main page is open.

    When Select category "Беспроводные и портативные колонки".
        And Click filter "Xiaomi".

    Then Checkbox "Xiaomiiii" checked.
