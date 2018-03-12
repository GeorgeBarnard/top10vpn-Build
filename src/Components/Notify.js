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

  // Trigger a notification, remove the notification after 2 seconds
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

  // Take shortcode passed by the notification request and return the appropriate notification
  // TODO: this could be own component as larger list of notifications would be build over time
  messageSwitch = (val) => {
    var message
    val && val === 'Dld' ?
    message = <p>Download speed:<br />Average download speeds recorded in our tests</p>
    : val && val === 'Png' ?
    message = <p>Ping speed:<br />Average Ping speed recorded in our tests</p>
    :
    (message = '',
     console.log('Error: invalid notification value')
    )
    return message;
  }

  render() {
    return (
      <StyNotification active={this.state.active != null ? this.state.active : false}>
        {this.state.message ? this.messageSwitch(this.state.message) : ''}
      </StyNotification>
    );
  }

}

// Styled Components
// TODO: Move to Seperate file

const StyNotification = styled.section`
  position: fixed;
  z-index: 20;
  bottom: 0;
  transform: translateY(${props => props.active ? '0' : '200px'});
  transition: 0.5s ease-in;
  width: 375px;
  height: 66px;
  background-color: #E6F5FC;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  p{
    font-family: "Calibre-medium", Fallback, sans-serif;
    font-size: 13px;
  }
`
