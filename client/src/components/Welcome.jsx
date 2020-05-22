import React, {Component} from 'react'
import { readAllUsers, readAllProfiles } from '../services/user-helper'
import { Link } from 'react-router-dom'

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: []
    }
  }


   
  render() {

    return (
      <div className='landing'>
         <h1>You're all set. go make a profile now</h1>
      </div>
    )
    
  }
 
}

export default Welcome;