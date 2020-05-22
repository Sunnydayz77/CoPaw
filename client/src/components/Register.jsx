import React, { Component } from 'react';
import Paw from '../services/Paw.png'
import axios from 'axios';
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
const SPREADSHEET_ID = process.env.REACT_APP_GOOGLE_SHEET_ID
const sheetName = 'secret_keys'
const cellRange = 'A1:B50'
const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${sheetName}!${cellRange}?key=${GOOGLE_API_KEY}`



//
//Likuna: This component handles our register form
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secretKeys: []
    }
  }

  componentDidMount = async () => {
    // const response = await Axios.get(url)

    const opts = {
      "url": `https://sheets.googleapis.com/v4/spreadsheets/1y_dewpnxTeKw7ETf-ye8pb4hhuH0L9p93dQvmAOuvmY`,
      "method": "GET",
      "headers": {
        //NOTICE: if enable the following line, the request will fail due to OPTIONS preflight failure
        //"User-Agent": "google-api-nodejs-client/1.3.1"
      },
      "params": {
        "key": GOOGLE_API_KEY
      },
    }

    const response = await axios.default(opts);

    this.setState({
      secretKeys: response
    })
  }

  render() {
    return (
      <div className="auth-container">

        <div className='landing'>
          <img className="paw-image" src={Paw} />

          <div className="container-text">
            <p className='wufph'>wufph.</p>
            <p className="connect-text">A new way to connect with Datadog
          <br />- <span className="purple-text"> worldwide</span>
            </p>

            <form className='auth-form' onSubmit={this.props.handleRegister} >
              <input name="email" type="text" placeholder="Enter your email" value={this.props.formData.email} onChange={this.props.handleChange} />
              <input name="password" type="password" placeholder="Enter your password" value={this.props.formData.password} onChange={this.props.handleChange} />
              <p className="password-min">password must contain a minimum of 8 characters and at least 1 special character</p>
              <button>Go</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;