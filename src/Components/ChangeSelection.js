import React, { Component } from 'react';
import styled from 'styled-components'

export default class ChangeSelection extends Component {

  render() {
    return (
      <ChangeLink onClick={() => this.props.changeSelection()} toggle={this.props.toggle}>Change</ChangeLink>
    );
  }

}

const ChangeLink = styled.p`
  text-decoration: underline;
  text-decoration-skip: ink;
  margin: -15px 5px 0 0;
  float: right;
  transform: translateX(${props => props.toggle ? '0' : '100px'});
  font-family: "Calibre-light", Fallback, sans-serif;
  font-weight: 300;
  font-size: 12px;
  transition: 0.5s ease-in;
  transition-delay: 0.3s;
`
