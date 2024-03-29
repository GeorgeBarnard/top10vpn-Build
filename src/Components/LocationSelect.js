import React, { Component } from 'react';
import LocationDropdown from './LocationDropdown'
import styled from 'styled-components'

//  Array of objects containing all the information needed for locations,
// TODO: Import this array, left in the Component for context

const locations =[
  {
    name: 'Paris, france',
    shortName: 'Paris',
    code: 'fra'
  },
  {
    name: 'London, UK',
    shortName: 'London',
    code: 'lon'
  },
  {
    name: 'New York, USA',
    shortName: 'New York',
    code: 'nyc'
  },
  {
    name: 'San Francisco, USA',
    shortName: 'San Francisco',
    code: 'sfo'
  },
  {
    name: 'Singapore, Asia',
    shortName: 'Singapore',
    code: 'sgp'
  },
  {
    name: 'Sydney, Australia',
    shortName: 'Sydney',
    code: 'syd'
  }
]

export default class LocationSelect extends Component {

  // Update the users current location
  updateLocation(val){
    val ?
    this.props.updateLocation(val)
    :
    console.log('Error: Invalid Location')
  }

  // Update the destination the user would like to VPN into
  updateDestination(val){
    val ?
    this.props.updateDestination(val)
    :
    console.log('Error: Invalid Destination')
  }

  render() {
    return (
      <StyLocationSelect>
        <StyDropdownSection>
          <p>Where are you now?</p>
          <LocationDropdown
             locations={locations}
             update={(val) => this.updateLocation(val)}
            />
        </StyDropdownSection>
        <StyDropdownSection >
          <p>Where do you want to VPN into?</p>
        <LocationDropdown
           locations={locations}
           update={(val) => this.updateDestination(val)}
          />
      </StyDropdownSection>
    </StyLocationSelect>
    );
  }
}

// Styled Components
// TODO: Move to Seperate file

const StyLocationSelect = styled.section`
 overflow: hidden;
`

const StyDropdownSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  p{
    width: 165px;
    font-family: "Calibre-light", Fallback, sans-serif;
    font-weight: 300;
    font-size: 18px;
  }
`
