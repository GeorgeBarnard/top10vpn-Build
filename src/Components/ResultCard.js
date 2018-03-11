import React, { Component } from 'react';
import styled from 'styled-components'
import '../App.css'

class ResultCard extends Component {

  notify(type){
    switch(type){
      case 1:
        this.props.notify('First Notify Message lol')
      break;
      case 2:
        this.props.notify('Second Notify Message lol')
      break;
      default:
      console.log('Error: Invalid notifiction selection')
    }
  }

  render() {
    var values
    this.props.response ?
    values = this.props.response
    :
    values = ''

    return (
      <StyCard className='animated slideInUp'>
        <p>{values ? values.displayName : ''}</p>
        <p>{values ? values.dlMbps : ''}</p>
        <p>{values ? values.pingAvg : ''}</p>
        <p>{values ? values.testPeriod : ''}</p>
        <NotifyButton onClick={() => this.notify(1)}>i</NotifyButton>
        <NotifyButton onClick={() => this.notify(2)}>i</NotifyButton>
      </StyCard>
    );
  }

}

export default ResultCard;

const StyCard = styled.section`
  width: 80%;
  margin: 10px auto;
  padding: 20px;
  background-color: red;
`
const NotifyButton = styled.button`

`
