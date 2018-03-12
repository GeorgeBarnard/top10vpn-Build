import React, { Component } from 'react';
import styled from 'styled-components'

export default class Menu extends Component {

  render() {
    return (
      <StyMenu>
        <p>MENU</p>
        <BurgerMenu></BurgerMenu>
      </StyMenu>
    );
  }

}

// Styled Components
// TODO: Move to Seperate file

const StyMenu = styled.section`
  margin-left: auto;
  p{
    display: inline-block;
    margin: 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: rgb(64, 64, 64);
  }
`
const BurgerMenu = styled.section`
  display: inline-block;
  width: 24px;
  height: 2px;
  background-color: rgb(64, 64, 64);
  position: relative;
  vertical-align: 3px;
  &::before{
    content: '';
    width: 24px;
    height: 2px;
    background-color: rgb(64, 64, 64);
    position: absolute;
    top: -5.5px;
    left: 0;
  }
  &::after{
    content: '';
    width: 24px;
    height: 2px;
    background-color: rgb(64, 64, 64);
    position: absolute;
    bottom: -6px;
    left: 0;
  }
`
