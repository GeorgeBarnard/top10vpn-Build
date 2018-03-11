import React, { Component } from 'react';
import styled from 'styled-components'

class SortBy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSort: false
    }
  }

  showSort(){
    this.setState({
      showSort: true
    })
  }

  // Allow user to open and change the options, but if they select the same option as already selected, the window will close.
  open(type){
    this.state.toggled && type != this.state.type ?
    this.setState({
      type,
      toggled: true
    }) : this.state.toggled && type === this.state.type ?
    this.setState({
      type,
      toggled: false
    }) :
    this.setState({
      type,
      toggled: true
    })
  }

  sortBy(type){
    this.props.sortBy(type)
    this.setState({
      toggled: false
    })
  }

  render() {
    var selectedOptions
    const newSwitch = (type) => ({
      1:
        (<section>
          <button>Filter Me</button>
          <button>And me</button>
        </section>)
        ,
      2:
        (<section>
          <button onClick={() => this.sortBy(1)}>dlSpeed</button>
          <button onClick={() => this.sortBy(2)}>Ping</button>
        </section>)
    })[type]

    this.state.type ?
    (selectedOptions = newSwitch(this.state.type),
    console.log('selected'))
    : ''

    return (
      <StyOuter showSort={this.state.showSort}>
        <Options toggled={this.state.toggled}>
          {selectedOptions}
        </Options>
        <StySortButton onClick={() => this.open(1)}>Filter By</StySortButton>
        <StySortButton onClick={() => this.open(2)}>Sort By</StySortButton>
      </StyOuter>
    );
  }

}

export default SortBy;

const StyOuter = styled.section`
  width: 375px;
  margin: 0 auto;
  height: 66px;
  position: fixed;
  z-index: 10;
  bottom: 0;
  transform: translateY(${props => props.showSort ? '0' : '100px'});
  transition: 0.2s ease-in;
  transition-delay: 1.1s;
  background-color: white;
  padding: 10px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -6px 14px -6px rgba(0, 0, 0, 0.2);
`
const Options = styled.section`
  width: 375px;
  height: 100px;
  position: absolute;
  z-index: -1;
  bottom: 66px;
  transform: translateY(${props => props.toggled ? '0' : '200px'});
  transition: 0.2s ease-in;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StySortButton = styled.button`
  width: 105px;
  height: 40px;
  background-color: #D8D8D8;
  border: none;
  border-radius: 2.5px;
  margin: 5px;
`
