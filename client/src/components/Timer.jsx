import React, { Component } from 'react'

export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  

  render() {
    return (
      <div className="Timer">
        <p>Current Local Time: {this.props.date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
