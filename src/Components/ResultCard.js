import React, { Component } from 'react';
import styled from 'styled-components'
import '../App.css'

import Nord from '../img/NordLogo.png'
import Info from '../img/info-icon.svg'

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

  round = (value, precision) => {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  testPeriod = (values) => {
    var timePeriod

      values === '0' ?
      timePeriod = 'Right now'
      : values === '7' ?
      timePeriod = 'Last 7 days'
      : values === '14' ?
      timePeriod = 'Last 14 days'
      : timePeriod = ''

      return timePeriod
  }

  render() {
    var values


    this.props.response ?
    values = this.props.response
    :
    values = ''

    return (
      <StyCard className='animated slideInUp'>
        <StyTopSection>
          <img src={Nord}></img>
          <p>{values ? values.displayName : ''}</p>
        </StyTopSection>
        <StyBottomSection>
          <StyBottomInner>
            <p className='inner-title'>Period</p>
            <p className='inner-content'>{values ? this.testPeriod(values.testPeriod) : ''}<br />{values ? values.testPeriod : ''}</p>
          </StyBottomInner>
          <StyBottomInner>
            <p className='inner-title'>Download<br />Speed<NotifyButton onClick={() => this.notify(1)}><img src={Info}></img></NotifyButton></p>
            <p className='inner-content mbps'>{values ? this.round(values.dlMbps, 1) : ''}<span>Mb</span></p>
          </StyBottomInner>
          <StyBottomInner>
            <p className='inner-title'>Ping time<NotifyButton onClick={() => this.notify(2)}><img src={Info}></img></NotifyButton></p>
            <p className='inner-content ping'>{values ? values.pingAvg : ''}<span>ms</span></p>
          </StyBottomInner>
        </StyBottomSection>
      </StyCard>
    );
  }

}

export default ResultCard;

const StyCard = styled.section`
  width: 365;
  height: 161px;
  margin: 10px auto;
  padding: 0px;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid #D6D4D4;
  display: flex;
  flex-wrap: wrap;
`
const NotifyButton = styled.button`

`

const StyTopSection = styled.section`
 height: 60px;
 width: 100%;
 border-bottom: 1px solid #D6D4D4;
 display: flex;
 align-items: center;
 box-sizing: border-box;
 p{
   margin: 0;
   font-size: 18px;
   font-weight: 300;
 }
 img{
   width: 43px;
   margin: 0 10px;
 }
`

const StyBottomSection = styled.section`
  position: relative;
  width: 100%;
  height: 101px;
  display: flex;
  flex-wrap: wrap;
`

const StyBottomInner = styled.section`
  width: 33.333%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  &:nth-child(2){
    border-left: 1px solid #D6D4D4;
    border-right: 1px solid #D6D4D4;
  }
  .inner-title{
    color: #6E6E6E;
    font-family: "Calibre-light", Fallback, sans-serif;
    margin: 10px 0 0 10px;
    font-size: 14px;
    font-weight: 300;
    button{
      margin-left: 2.5px;
      border-radius: 50%;
      width: 20px;
      padding: 0;
      height: 20px;
      border: none;
      vertical-align: -3px;
      transform: scale(1);
      &:focus{
        outline: none;
      }
    }
  }
  .inner-content{
    margin: 0;
    position: absolute;
    bottom: 17.5px;
    left: 10px;
    font-family: "Calibre-medium", Fallback, sans-serif;
    font-weight: 500;
  }
  .mbps, .ping{
    font-size: 20px;
    span{
      font-size: 14px;
    }
  }
`
