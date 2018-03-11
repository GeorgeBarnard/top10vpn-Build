import React, { Component } from 'react'
import styled from 'styled-components'
// Import Components
import Logo from './Logo'
import Menu from './Menu'

export default class Header extends Component {

  render() {
    return (
      <StyHeader>
        <Logo
          width={'110px'}
         />
         <Menu />
      </StyHeader>
    );
  }

}

const StyHeader = styled.header`
  width: 100%;
  background-color: white;
  height: 55px;
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`
