import React, { Component } from 'react';
import styled from 'styled-components'

export default class TestPeriod extends Component {

  // Update the users test period based on selection and return result to main 
  selectValue(val){
    val ?
    this.props.updateTestPeriod(val)
    :
    console.log('Error: Invalid time period')
  }

  render() {
    var current = this.props.currentTestPeriod
    return (
      <Outer>
        <Button active={current === '0' ? true : false} onClick={() => this.selectValue('0')}>Right Now</Button>
        <Button active={current === '7' ? true : false} onClick={() => this.selectValue('7')}>Last 7 days</Button>
        <Button active={current === '14' ? true : false} onClick={() => this.selectValue('14')}>Last 14 days</Button>
      </Outer>
    );
  }

}

// Styled Components
// TODO: Move to Seperate file

const Outer = styled.section`
  background-color: rgb(179, 222, 141);
  margin: 15px auto;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #D1D1D1;
`
const Button = styled.section`
  width: 33.3333%;
  height: 40px;
  background-color: ${props => props.active ? '#E6F5FC' : 'white'};
  font-family: "Calibre-light", Fallback, sans-serif;
  font-weight: 300;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`
