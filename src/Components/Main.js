import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

// Component Imports

import LocationSelect from './LocationSelect'
import TestPeriod from './TestPeriod'
import MakeCall from './MakeCall'
import ViewResults from './ViewResults'
import ChangeSelection from './ChangeSelection'

export default class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {
        currentLocation: 'fra',
        currentLocationName: 'Paris',
        currentDestination: 'fra',
        currentDestinationName: 'Paris',
        currentTestPeriod: '0',
        response: '',
        originalResponse: '',
        searchToggled: false
      };
    }

  updateLocation(val, type){
    var newval = JSON.parse(val)
    // TODO: Change this to Es6 switch
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
      searchToggled: true,
      response: ''
    })
    axios.get(request)
     .then(function (response) {
       console.log(response);
       Object.values(response.data).forEach(function(obj) { obj.testPeriod = self.state.currentTestPeriod; });
       self.setState({
         response: Object.values(response.data),
         originalResponse: Object.values(response.data)
       })
       self.setState({
         loading: false
       })
       self.props.openSort(Object.values(response.data));
     })
    .catch(function (error) {
       alert('Api Call Error: Please try again shortly')
       console.log('Call Error: ', error);
       self.setState({
         loading: false
       })
    });
  }

  changeSelection(){
    this.setState({
      searchToggled: false
    })
  }

  sortBy = (sortType) => {
    var sortedResponse
    sortType && sortType === 1 ?
     (
      sortedResponse = this.state.response,
      this.setState({
        response: Object.values(sortedResponse).sort(this.compareValues('dlMbps', 'desc'))
      }),
      console.log(this.state.response)
    )
    : sortType && sortType === 2 ?
    (
     sortedResponse = this.state.response,
     this.setState({
       response: Object.values(sortedResponse).sort(this.compareValues('pingAvg', 'desc'))
     }),
     console.log(this.state.response)
   )
    :
    console.log('Error: Invalid sort selection')
  }

  resetFilter = () => {
    var original = this.state.originalResponse
    this.setState({
      response: original
    })
  }

  filterBy = (value, type) => {
    var filteredResponse = this.state.originalResponse
    var newArray
    type && type === 1 ?
    newArray = filteredResponse.filter(function (el) {
      return el.dlMbps <= value[1] &&
             el.dlMbps >= value[0]
    })
    : type && type === 2 ?
    newArray = filteredResponse.filter(function (el) {
      return el.pingAvg <= value[1] &&
             el.pingAvg >= value[0]
    })
    : '';

    newArray.length >= 1 ?
    this.setState({
      response: newArray
    })
    : console.log('No Results')

  }

  compareValues = (key, order='asc') => {
  return function(a, b) {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
        return 0;
    }
    const varA = (typeof a[key] === 'string') ?
      a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ?
      b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order == 'desc') ? (comparison * -1) : comparison
    );
  };
}

testPeriodSwitch = (val) => {
  var test = val
  var testPeriod
  test && test === '0' ?
  testPeriod = ' right now'
  : test && test === '7' ?
  testPeriod = ' last 7 days'
  : test && test === '14' ?
  testPeriod = ' last 14 days'
  :
  (testPeriod = '',
  console.log('Error: invalid test period'))
  return testPeriod;
}


  render() {
    var testPeriodDisplay = this.testPeriodSwitch(this.state.currentTestPeriod)

    return (
      <StyMain>
        <StyTitle>VPN Speed Test</StyTitle>
        <Destination
          toggled={this.state.searchToggled}>{this.state.currentLocationName ? this.state.currentLocationName : ''}
           -
           {this.state.currentDestinationName ? this.state.currentDestinationName : ''}
           ,
           {testPeriodDisplay}
         </Destination>
         <ChangeSelection
            toggle={this.state.searchToggled}
            changeSelection={() => this.changeSelection()}
          />
        <SelectSection toggled={this.state.searchToggled}>
          <LocationSelect
            toggled={this.state.searchToggled}
            updateLocation={(val, name) => this.updateLocation(val, 1)}
            updateDestination={(val, name) => this.updateLocation(val, 2)}
           />
           <TestPeriod
             currentTestPeriod={this.state.currentTestPeriod ? this.state.currentTestPeriod : ''}
             updateTestPeriod={(val) => this.updateTestPeriod(val)}
            />
            <MakeCall
              // active={active}
              makeCall={() => this.makeCall()}
              close={() => this.close()}
              searchToggled={this.state.searchToggled}
            />
        </SelectSection>
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
  min-height: 100vh;
  background-color: white;
  padding: 0 10px 60px 10px;
  box-sizing: border-box;
`
const StyTitle = styled.h1`
  margin: 25px 0 0;
  font-family: "Calibre-medium", Fallback, sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: #424242;
`
const Destination = styled.section`
  transform: translateX(${props => props.toggled ? '0' : '-110%'});
  transition: 0.5s ease-in;
  transition-delay: 0.3s;
  font-family: "Calibre-medium", Fallback, sans-serif;
  font-size: 12px;
  font-weight: 300;
  color: #424242;
`
const SelectSection = styled.section`
  overflow: hidden;
  position: relative;
  height: ${props => props.toggled ? '0' : '265px'};
  transition: 0.3s linear;
`
