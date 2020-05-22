import React, { Component } from 'react';

export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      localTime: ''
    };
  }

  componentDidMount = async () => {
    this.calcTime(this.props.differenceUTC)
  }

  //formula taken from https://stackoverflow.com/questions/10087819/convert-date-to-another-timezone-in-javascript
  calcTime(offset) {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    var nd = new Date(utc + (3600000 * offset));
    var time = `${nd.getHours()}:${nd.getMinutes()}`
    this.setState({
      localTime: time
    })
  }


  callTime() {
    setInterval(() => {
      this.calcTime(this.props.differenceUTC)
    }, 1000);
  }


  render() {
    return (
      <div className="Timer">
        <p>Current Local Time: {this.state.localTime}</p>
        {this.callTime()}
      </div>
    )
  }
}
