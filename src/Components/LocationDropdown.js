import React, { Component } from 'react';

export default class LocationDropdown extends Component {

  onChange(event){
    event ?
    this.props.update(event.target.value) :
    console.log('Error: Invalid location selected')
  }

  render() {
    let chooselocations
    var locations
    this.props.locations ?
    (locations = this.props.locations,
      chooselocations = Object.keys(locations).map(result =>
        <option key={locations[result].code} value={JSON.stringify(locations[result])} name={locations[result].shortName}>{locations[result].name}</option>
      )
    ) :
    chooselocations = []
    return (
      <div>
        <select
           onChange={(e) => this.onChange(e)}>
          <option value="" defaultValue disabled hidden>Choose here</option>
          {chooselocations}
        </select>
      </div>
    );
  }
}
