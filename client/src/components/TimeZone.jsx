import React, { Component } from 'react';
import { Timezones } from './TimeZones.js';

export default class TimeZone extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timezone:''
    }
    console.log(Timezones)
  }

  onSelect(event) {
    this.setState({
      timezone:event.target.value
    });
  }

  render() {
    return (
      <div>
        <p>Select your timezone: </p>
        <select value={this.state.timezone} onChange={this.onSelect}>
          {Timezones.map((timezone) => <option value={timezone.value}>{timezone.name}</option>)} 
        </select>
      </div>
    )
  }
}