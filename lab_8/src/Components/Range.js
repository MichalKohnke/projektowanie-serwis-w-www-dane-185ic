import React, { Component } from 'react'

class Range extends Component {
  constructor(props) {
      super(props); 
      this.state = {
        value: props.value
      }
  }

  onChange = (e) => {
      //przekazanie state do komponentu nadrzędnego w app.js
      this.props.onChange(this.state.value); 
      this.setState({ value: e.target.value }); 
  }

  static defaultProps = {
      min: 0, 
      max: 245, 
      step: 1
  } //default props

  render() {
    return (
      <div className="range">
        <input 
            type="range"
            value={this.state.value}
            min={this.props.min}
            max={this.props.max}
            step={this.props.step} 
            onChange={this.onChange}
        />
      </div>
    );
  } //przygotowanie wartości
}

export default Range
