import React, { Component } from 'react';
import styled from 'styled-components'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class SortBy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSort: false,
      lowerBound: '',
      upperBound: '',
      value: [],
      pingLowerBound: '',
      pingUpperBound: '',
      pingValue: []
    }
  }

  showSort = (response) => {
    var upper = Math.max.apply(Math, response.map(function(o){return o.dlMbps;}))
    var lower = Math.min.apply(Math, response.map(function(o){return o.dlMbps;}))
    var upperPing = Math.max.apply(Math, response.map(function(o){return o.pingAvg;}))
    var lowerPing = Math.min.apply(Math, response.map(function(o){return o.pingAvg;}))
    this.setState({
      showSort: true,
      currentResponse: response,
      lowerBound: lower,
      upperBound: upper,
      value: [lower, upper],
      pingLowerBound: lowerPing,
      pingUpperBound: upperPing,
      pingValue: [lowerPing, upperPing]
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
      toggled: false,
      filterToggle: false
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

  // filterBy(type){
  //   this.props.filterBy(type, this.state.)
  //   this.setState({
  //     toggled: false
  //   })
  // }

  // Range Slider

  onLowerBoundChange(e){
    this.setState({ lowerBound: e.target.value });
  }
  onUpperBoundChange(e){
    this.setState({ upperBound: e.target.value });
  }

  speedSliderChange = (value) => {
    console.log(value);
    this.setState({
      value,
      upperBound: value[1],
      lowerBound: value[0]
    });
  }

  pingSliderChange = (value) => {
    console.log(value);
    this.setState({
      pingValue: value,
      pingUpperBound: value[1],
      pingLowerBound: value[0]
    });
  }

  handleApply = (value) => {
    this.state.filterSlider && this.state.filterSlider === 1 ?
    this.props.sendFilter(this.state.value, 1)
    : this.state.filterSlider && this.state.filterSlider === 2 ?
    this.props.sendFilter(this.state.pingValue, 2)
    : console.log('Error: invalid filter selection')

    this.setState({
      toggled: false,
      filterToggle: false
    })
  }

  resetFilter = () => {
    this.props.resetFilter()
    this.showSort(this.state.currentResponse)
    this.setState({
      toggled: false,
      filterToggle: false
    })
  }

  sliderState(val){
    this.state.filterToggle && val != this.state.filterSlider ?
    (console.log('top'),
    this.setState({
      filterSlider: val,
      filterToggle: true
    })): this.state.filterToggle && val === this.state.filterSlider ?
    (console.log('middle'),
    this.setState({
      filterSlider: val,
      filterToggle: false
    })) :
    this.setState({
      filterSlider: val,
      filterToggle: true
    })
  }


  round = (value, precision) => {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  showSlider = (value) => {
    var returnSlider
    value && value  === 1 ?
    returnSlider = (
       <section className='outer'>
         <section className='tag'>
           <label>{this.state.lowerBound ? this.round(this.state.lowerBound, 1) : ''}Mb</label>
         </section>
         <section className='slider'>
           <Range allowCross={false} value={this.state.value} onChange={this.speedSliderChange} max={250} />
         </section>
         <section className='tag'>
           <label>{this.state.upperBound ? this.round(this.state.upperBound, 1) : ''}Mb</label>
         </section>
         <section className='buttonSection'>
           <StySortButton onClick={this.handleApply}>Apply</StySortButton>
           <StySortButton onClick={this.resetFilter}>Reset</StySortButton>
         </section>
       </section>
     )
    : value && value == 2 ?
      returnSlider = (
         <section className='outer'>
           <section className='tag'>
             <label>{this.state.pingLowerBound ? this.round(this.state.pingLowerBound, 1) : ''}ms</label>
           </section>
           <section className='slider'>
             <Range allowCross={false} value={this.state.pingValue} onChange={this.pingSliderChange} max={50} />
           </section>
           <section className='tag'>
             <label>{this.state.pingUpperBound ? this.round(this.state.pingUpperBound, 1) : ''}ms</label>
           </section>
           <section className='buttonSection'>
             <StySortButton onClick={this.handleApply}>Apply</StySortButton>
             <StySortButton onClick={this.resetFilter}>Reset</StySortButton>
           </section>
         </section>
       )
    : returnSlider = ''


    return returnSlider;
  }

  render() {
    var selectedOptions
    var filterSlider

    const newSwitch = (type) => ({
      1:
        (<section>
          <StySortButton onClick={() => this.sliderState(1)}>By Mbps</StySortButton>
          <StySortButton onClick={() => this.sliderState(2)}>By Ping</StySortButton>
        </section>)
        ,
      2:
        (<section>
          <StySortButton onClick={() => this.sortBy(1)}>dlSpeed</StySortButton>
          <StySortButton onClick={() => this.sortBy(2)}>Ping</StySortButton>
        </section>)
    })[type]

    this.state.type ?
    (selectedOptions = newSwitch(this.state.type),
    console.log('selected'))
    : '' ;

    return (
      <StyOuter showSort={this.state.showSort}>
        <StySlider toggled={this.state.filterToggle}>
          {this.showSlider(this.state.filterSlider)}
        </StySlider>
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
  height: 66px;
  position: absolute;
  z-index: -1;
  bottom: 66px;
  transform: translateY(${props => props.toggled ? '0' : '200px'});
  transition: 0.2s ease-in;
  background-color: #E6F5FC;
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
const StySlider = styled.section`
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  bottom: 132px;
  background-color: #19B4E4;
  color: white;
  transform: translateY(${props => props.toggled ? '0' : '266px'});
  .outer{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
  }
  label{
    display: inline-block;
  }
  .tag, .slider, .buttonSection{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .buttonSection{
    width: 100%;
    padding-top: 10px;
  }
  .tag{
    width: 20%;
  }
  .slider{
    width: 60%;
  }
`
