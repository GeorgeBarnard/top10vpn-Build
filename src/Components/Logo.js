import React, { Component } from 'react';
import styled from 'styled-components'
import LogoSrc from '../img/logo.png'

export default class Logo extends Component {

  render() {
    return (
      <StyLogo width={this.props.width} src={LogoSrc}></StyLogo>
    );
  }
}

const StyLogo = styled.img`
  width: ${props => props.width}
`
