import React, { Component } from 'react';

export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    };
  }

  callTime() {
    setInterval(() => {
      this.setState({date: new Date()})
    }, 1000);
  }
  

  render() {
    return (
      <div className="Timer">
        <p>Current Local Time: {this.state.date.toLocaleTimeString()}</p>
        {this.callTime()}
      </div>
    )
  }
}
