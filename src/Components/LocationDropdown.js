import React, { Component } from 'react';
import styled from 'styled-components'

export default class LocationDropdown extends Component {

  //Send selected location to props
  onChange(event){
    event ?
    this.props.update(event.target.value) :
    console.log('Error: Invalid location selected')
  }

  render() {
    let chooselocations
    var locations
    // Populate the location dropdown from the supplied Json array
    this.props.locations ?
    (locations = this.props.locations,
      chooselocations = Object.keys(locations).map(result =>
        <option key={locations[result].code} value={JSON.stringify(locations[result])} name={locations[result].shortName}>{locations[result].name}</option>
      )
    ) :
    chooselocations = []
    return (
      <div>
        <StySelect
           hide={this.props.hide}
           onChange={(e) => this.onChange(e)}>
          <option value="" defaultValue disabled hidden>Choose here</option>
          {chooselocations}
        </StySelect>
      </div>
    );
  }
}

// Styled Components
// TODO: Move to Seperate file

const StySelect = styled.select`
  appearance: none;
  width: 153px;
  height: ${props => props.hide ? '0px' : '40px'};
  background-color: #E6F5FC;
  border-radius: 0;
  border: 0;
  padding: 10px;
  box-sizing: border-box;
  font-family: "Calibre-light", Fallback, sans-serif;
  font-weight: 300;
  font-size: 18px;
  display: flex;
  align-items: center;
  &:focus{
    outline: 0;
  }
`
