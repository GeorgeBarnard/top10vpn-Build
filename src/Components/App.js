import React, { Component } from 'react'
import styled from 'styled-components'

// Component Imports
import Header from './Header'
import Main from './Main'
import Notify from './Notify'

export default class App extends Component {

  // notify(val){
  //   this.setState({
  //
  //   })
  // }

  render() {
    return (
      <StyOuter>
        <Header />
        <Main notify={(val) => this.notification.trigger(val)} />
        <Notify ref={(instance) => { this.notification = instance; }}/>
      </StyOuter>
    );
  }
}

const StyOuter = styled.main`
  width: 375px;
  margin: 50px auto;
  background-color: pink;
`
