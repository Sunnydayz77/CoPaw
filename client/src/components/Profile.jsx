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
    const { profileData, defaultMessage } = this.state
    console.log(profileData)
    return (
      <div className='subComments-display'>
        <h1>profile display</h1>
        <Link to='/edit-profile'>
          <button>Edit</button>
        </Link>
        <p>{defaultMessage}</p>
        <p>{this.props.currentUser.email}</p>
        <p>{profileData.full_name}</p>
        <p>{profileData.title}</p>
        <p>{profileData.department}</p>
        <p>{profileData.status}</p>
        <p>{profileData.twitter_url}</p>
      </div>
    )

  }

}


export default SubComments