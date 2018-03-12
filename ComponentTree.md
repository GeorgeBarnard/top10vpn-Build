


Component tree for Top10VPN test build.

Overview:

Html Root
  ↓
  App
    ↓
    Header
      ↓
      Logo
      Menu
    Main
      ↓
      LocationSelect
        ↓
        LocationDropdown
      TestPeriod
      MakeCall
      changeSelection
      ViewResults
        ↓
        ResultCard
      FilterSort
    Notify

Details:

App -
  Contain the application and top level state

    Header -
      the header element of the page, contains Logo and Menu toggle

        Main -
          Core functionality of the application screen,
          Here the call is made to the API based upon inputs passed to it.
          Main also distributes the response information to child components for manipulation

            LocationSelect -
              User selects where they would like to run the application from and where they
              would like to VPN into.

                LocationDropdown -
                  Shared Component to select either the location or destination values

            TestPeriod -
              Select the time period to test, pass the data up to main, where it is added to the the api call

            MakeCall -
              Button that triggers the call within main component

            changeSelection -
              Allow user to go back and change their original selection

            ViewResults -
              Component that displays the results returned by the api

                ResultCard -
                  The Individual result for each of the VPN provider results

            FilterSort -
              Section that allows user to filter or sort the results

            Notify -
              Display the notifications sent by the application


Tech Stack :

React
Styled-components
Axios
Range.js
