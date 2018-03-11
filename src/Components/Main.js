import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

// Component Imports

import LocationSelect from './LocationSelect'
import TestPeriod from './TestPeriod'
import MakeCall from './MakeCall'
import ViewResults from './ViewResults'

export default class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {
        currentLocation: 'fra',
        currentLocationName: '',
        currentDestination: 'fra',
        currentDestinationName: '',
        currentTestPeriod: '0',
        response: '',
        searchToggled: false
      };
    }

  updateLocation(val, type){
    var newval = JSON.parse(val)
    switch(type){
      case 1:
        newval ?
        this.setState({
          currentLocation: newval.code,
          currentLocationName: newval.shortName
        })
        :
        console.log('Error: Invalid Location')
        break;
      case 2:
        newval ?
        this.setState({
          currentDestination: newval.code,
          currentDestinationName: newval.shortName
        })
        :
        console.log('Error: Invalid Location')
        break;
      default:
        console.log('Error: Invalid Selection')
    }
  }

  updateTestPeriod(val){
    val ?
    this.setState({
      currentTestPeriod: val
    }) :
    console.log('Error: invalid test period')
  }

  makeCall(){
    var state = this.state
    var request = 'https://perfapi.perf-data-api.top10vpn-data.prod.top10vpn.co/sdata/results?src='+ state.currentLocation +'&dest='+ state.currentLocation +'&tpd='+ state.currentTestPeriod +''
    var self = this;
    this.setState({
      loading: true,
      searchToggled: true
    })
    axios.get(request)
     .then(function (response) {
       console.log(response);
       Object.values(response.data).forEach(function(obj) { obj.testPeriod = self.state.currentTestPeriod; });
       self.setState({response: response.data})
       self.setState({
         loading: false
       })
     })
    .catch(function (error) {
       console.log(error);
       self.setState({
         loading: false
       })
    });
  }
  close(){
    this.setState({
      searchToggled: false
    })
  }


  render() {
    // Set Button active state depending on the current values in state
    // var state = this.state
    // var active
    // state.currentLocation && state.currentDestination && state.currentTestPeriod ?
    // active = false :
    // active = true
    return (
      <StyMain>
        <p>VPN Speed Test</p>
        <Destination toggled={this.state.searchToggled}>{this.state.currentLocationName ? this.state.currentLocationName : ''} - {this.state.currentDestinationName ? this.state.currentDestinationName : ''}</Destination>
        <SelectSection toggled={this.state.searchToggled}>
          <LocationSelect
            updateLocation={(val, name) => this.updateLocation(val, 1)}
            updateDestination={(val, name) => this.updateLocation(val, 2)}
           />
           <TestPeriod
             currentTestPeriod={this.state.currentTestPeriod ? this.state.currentTestPeriod : ''}
             updateTestPeriod={(val) => this.updateTestPeriod(val)}
            />
        </SelectSection>
        <MakeCall
          // active={active}
          makeCall={() => this.makeCall()}
          close={() => this.close()}
        />
        <ViewResults
          loading={this.state.loading ? this.state.loading : ''}
          response={this.state.response ? this.state.response : ''}
          notify={(val) => this.props.notify(val)}
         />
      </StyMain>
    );
  }

}

const StyMain = styled.section`
  width: 100%;
  background-color: rgb(184, 142, 222);
  overflow-x: hidden;
  padding: 10px;
  box-sizing: border-box;
`
const Destination = styled.section`
  transform: translateX(${props => props.toggled ? '0' : '-110%'});
  transition: 0.5s ease-in;
  transition-delay: 0.3s;
`
const SelectSection = styled.section`
  overflow: hidden;
  height: ${props => props.toggled ? '0px' : '200px'};
  transition: 0.2s ease-in;
`
