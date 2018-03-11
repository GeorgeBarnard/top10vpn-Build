import React, { Component } from 'react'
import styled from 'styled-components'
// Import components
import ResultCard from './ResultCard'


class ViewResults extends Component {

  render() {

    // Loading functionality
    var loading
    var results
    this.props.loading ?
     loading = <Loading>Loading</Loading>
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
  background-color: rgb(102, 226, 153);
  padding: 10px 0;
  &:nth-child(1){
    animation-delay: 0.1s
  }
  &:nth-child(2){
    animation-delay: 0.3s
  }
`
const Loading = styled.section`
  height: 30px;
  margin: 30px auto;
  background-color: red;
`
