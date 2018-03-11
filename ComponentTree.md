


Component tree for Top10VPN test build.

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
      ViewResults
        ↓
        ResultCard
      FilterSort
        ↓
        FilterBy
        SortBy
    Notify



App -
  Contain the application and top level state

Header -
  the header element of the page, contains Logo and Menu toggle

Main -
  Core functionality of the application screen,
  holds all important app state, makes the calls and
  distributes the information to child components

LocationSelect -
  User selects where they would like to run the application from

LocationDropdown -
  Shared Component to select either the location or destination values

TestPeriod -
  Select the time period to test, pass the data up to main, where it is added as the final piece of the api call

ViewResults -
  Section that displays the results returned by the api

ResultCard -
  The Individual result for each of the VPN provider results

FilterSort -
  Section that allows user to filter or sort the results

FilterBy -
  Filter the results Section

SortBy -
  Sort the results Section

Notify -
  Display the notifications sent by the application


Tech Stack :

React
Styled-components
Axios
