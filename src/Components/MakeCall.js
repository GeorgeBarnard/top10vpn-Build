import React, { Component } from 'react';
import styled from 'styled-components'

export default class MakeCall extends Component {

  makeCall(){
    this.props.makeCall()
  }

  closeButton(){
    this.props.close()
  }

  render() {
    return (
      <StyOuter>
        <ResultsButton onClick={() => this.makeCall()}>View Results V</ResultsButton>
        <button onClick={() => this.closeButton()}>Close</button>
      </StyOuter>
    );
  }

}

const StyOuter = styled.section`
  background-color: rgb(203, 160, 104);
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ResultsButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: rgb(76, 172, 198);
  border: none;
  margin: 10px 0;
`
