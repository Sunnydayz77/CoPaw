import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {readOneProfile} from '../services/user-helper'

class SubComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: '',
      defaultMessage: ''
    }

  }

  async componentDidMount() {
    const response = await readOneProfile(this.props.currentUser.id)
    if (response.length > 0) {
      this.setState({
        profileData: response[0]
      })
    }
    else {
      this.setState({
        defaultMessage: 'Please edit your profile'
      })
    }
  }


  render() {
    const {profileData, defaultMessage} = this.state
    return (
      <div className='subComments-display'>
        <h1>profile display</h1>
        <Link to='/edit-profile'>
          <button>Edit</button>
        </Link>
        <a>{defaultMessage}</a>
        <a>{this.props.currentUser.email}</a>
        <a>{profileData.full_name}</a>
        <a>{profileData.title}</a>
        <a>{profileData.department}</a>
        <a>{profileData.status}</a>
      </div>
    )

  }

}


export default SubComments