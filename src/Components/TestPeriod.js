import React, { Component } from 'react';
import styled from 'styled-components'

export default class TestPeriod extends Component {

  selectValue(val){
    val ?
    (console.log(val, ' days selected'),
    this.props.updateTestPeriod(val))
    :
    console.log('Error: Invalid time period')
  }

  render() {
    var current = this.props.currentTestPeriod
    console.log(current)
    return (
      <Outer>
        <Button active={current === '0' ? true : false} onClick={() => this.selectValue('0')}>Right Now</Button>
        <Button active={current === '7' ? true : false} onClick={() => this.selectValue('7')}>Last 7 days</Button>
        <Button active={current === '14' ? true : false} onClick={() => this.selectValue('14')}>Last 14 days</Button>
      </Outer>
    );
  }

}

const Outer = styled.section`
  background-color: rgb(179, 222, 141);
  margin: 15px auto;
  display: flex;
  flex-wrap: wrap;
`
const Button = styled.section`
  width: 33.3333%;
  height: 40px;
  background-color: ${props => props.active ? 'rgb(130, 130, 130)' : 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
`
