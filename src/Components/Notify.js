import React, { Component } from 'react';
import styled from 'styled-components'

export default class Notify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      message: ''
    }
  }

  trigger = (val) => {
    var self = this
    val ?
    (this.setState({
      active: true,
      message: val
    }),
    setTimeout(function(){
      self.setState({
        active: false
      })
    }, 2000))
    :
    console.log('Error: invalid notification message')
  }

  render() {
    return (
      <StyNotification active={this.state.active != null ? this.state.active : false}>
        Hello
      </StyNotification>
    );
  }

}

const StyNotification = styled.section`
  position: fixed;
  z-index: 20;
  bottom: 0;
  transform: translateY(${props => props.active ? '0' : '200px'});
  transition: 0.5s ease-in;
  width: 375px;
  background-color: green;
  padding: 20px;
  box-sizing: border-box;
`
