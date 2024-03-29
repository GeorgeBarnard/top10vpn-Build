import React, { Component } from 'react';
import styled from 'styled-components'

import downArrow from '../img/downArrow.svg'

export default class MakeCall extends Component {

  // Trigger the search function on main
  makeCall(){
    this.props.makeCall()
  }

  render() {
    return (
      <StyOuter >
        <ResultsButton onClick={() => this.makeCall()}><img src={downArrow}></img>View Results</ResultsButton>
      </StyOuter>
    );
  }

}

// Styled Components
// TODO: Move to Seperate file

const StyOuter = styled.section`
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
const ResultsButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: #19B4E4;
  border: none;
  margin: 10px 0;
  font-family: "Calibre-medium", Fallback, sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: white;
  img{
    margin-right: 5px;
  }
`
