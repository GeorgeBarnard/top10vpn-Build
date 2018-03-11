import React, { Component } from 'react'
import styled from 'styled-components'
// Import components
import ResultCard from './ResultCard'
import LoadingGif from '../img/load.gif'


class ViewResults extends Component {

  render() {

    // Loading functionality
    var loading
    var results
    var self = this
    this.props.loading ?
        loading = <Loading src={LoadingGif} alt='Loading'></Loading>
     :
     loading = ''
     // Display Cards
     var response
     var cards
     this.props.response ?
     (response = this.props.response,
       cards = Object.keys(response).map(result =>
         (<ResultCard
           key={this.props.response[result].displayName}
           response={this.props.response[result]}
           testPeriod={this.props.response.testPeriod}
           notify={(val) => this.props.notify(val)}
         />)
       )
     ) :
     response = ''

    return (
      <StyOuter>
        {loading}
        {cards}
      </StyOuter>
    );
  }

}

export default ViewResults;

const StyOuter = styled.section`
  padding: 10px 0;
  &:nth-child(1){
    animation-delay: 0s
  }
  &:nth-child(2){
    animation-delay: 0.1s
  }
`
const Loading = styled.img`
  width: 200px;
  margin: 50px calc(50% - 100px);
`
