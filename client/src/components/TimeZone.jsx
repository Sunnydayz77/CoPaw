import React, { Component } from 'react';
import Timezones from './TimeZones.jsx';

export default class TimeZone extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timezone:''
    }
  }

  onSelect(event) {
    this.setState({
      timezone:event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Select box for Timezones</h1>
        <select value={this.state.timezone} onChange={this.onSelect}>
          {Timezones.map((timezone) => <option value={timezone.value}>{timezone.name}</option>)}
        </select>
      </div>
    )
  }
}