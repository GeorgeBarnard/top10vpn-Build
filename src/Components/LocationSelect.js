import React, { Component } from 'react';
import LocationDropdown from './LocationDropdown'


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
    name: 'Sydney, Austrailia',
    shortName: 'Sydney',
    code: 'syd'
  }
]

export default class LocationSelect extends Component {

  updateLocation(val){
    val ?
    this.props.updateLocation(val)
    :
    console.log('Error: Invalid Location')
  }

  updateDestination(val){
    val ?
    this.props.updateDestination(val)
    :
    console.log('Error: Invalid Destination')
  }

  render() {
    return (
      <div>
        <LocationDropdown
           locations={locations}
           update={(val) => this.updateLocation(val)}
          />
        <LocationDropdown
           locations={locations}
           update={(val) => this.updateDestination(val)}
          />
      </div>
    );
  }

}
