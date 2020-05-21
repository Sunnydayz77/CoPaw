import React, { Component } from 'react'
import { readAllUsers, readAllProfiles } from '../services/user-helper'
import '../styles/Map.css'


class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className='landing' >
        <h1>This will have TEAM threads</h1>
      </div>
    )

  }

}

export default Team;