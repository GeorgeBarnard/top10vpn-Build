import React, { Component } from 'react'
import styled from 'styled-components'

// Component Imports
import Header from './Header'
import Main from './Main'
import Notify from './Notify'
import SortBy from './SortBy'

export default class App extends Component {

  render() {
    return (
      <StyOuter>
        <Header />
        <Main
          ref={(instance) => { this.main = instance; }}
          openSort={() => this.sortBy.showSort()}
          notify={(val) => this.notification.trigger(val)}
        />
        <Notify
          ref={(instance) => { this.notification = instance; }}
        />
        <SortBy
          ref={(instance) => { this.sortBy = instance; }}
          sortBy={(type) => this.main.sortBy(type)}
        />
      </StyOuter>
    );
  }
}

const StyOuter = styled.main`
  width: 375px;
  margin: 50px auto;
  background-color: pink;
`
