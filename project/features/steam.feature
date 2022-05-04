Feature: Test steam.

    @steam
    Scenario: Search game in steam.

        Given Steam page is open.

        When Enter game name "The Witcher".
        Then Game name "The Witcher" entered and displayed.

        When Click on search icon.
        Then Search results are displayed.

        When Click on sort button.
        Then Sort dropdown is displayed.

        When Click on 5 sort option.
        # Then Prices sorted in descending order of price.

        And Click on "STORE" menu item button.
        And Click on filter item "By Curators".
        And Return to previous page.
        And Click on filter item "Top Sellers".
        And Click on special offers checkbox.

        Then Checkbox is checked.


        # Search for the "The Witcher 3: Wild Hunt"
        # Open game page
        # Set as date current date and click View Page
        # "Please enter a valid date" displayed
        # Enter valid date
        # Game Page is opened
        # Publisher sale image is displayed
        # Image contains text "Celebrating the 10th Anniversary of The Witcher 3: Wild Hunt" 

