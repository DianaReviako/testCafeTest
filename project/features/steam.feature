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

        When Move on "COMMUNITY" meny item.
            And Move on meny.
            And Click on "STORE" menu item button.
            And Click on filter item "By Curators".
            And Return to previous page.
            And Click on filter item "Top Sellers".
            And Click on special offers checkbox.

        Then Checkbox is checked.

        # Then Game image contains href.
        # Then Game image contains src.

        # When Click login button.
        #     And Enter username "houseonchickenlegs".
        #     And Enter password "HakunaMatata1918".

        # Then Url current page contains "store.steampowered.com/login/".

        # When Return to previous page.
            # And Return to previous page.
            # And Click on filter item "Top Sellers".
