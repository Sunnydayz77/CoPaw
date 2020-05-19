import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { readOneProfile } from '../services/user-helper'
import { twitter_svg, linkedin_svg, ig_svg } from '../services/svg'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: '',
      defaultMessage: ''
    }

  }

  async componentDidMount() {
    const response = await readOneProfile(this.props.user_id)
    if (response.length > 0) {
      this.setState({
        profileData: response[0]
      })
    }
    else {
      this.setState({
        defaultMessage: 'User has not updated their profile yet'
      })
    }
  }


  render() {
    const { profileData, defaultMessage } = this.state
    console.log(profileData)
    return (
      <div className='subComments-display'>

        <Link to='/edit-profile'>
          <button>Edit</button>
        </Link>
        <p>{defaultMessage}</p>
        <div className='profile-section'>
          <img src={profileData.img_url} />
          <h1>{profileData.full_name}</h1>
          <p>{profileData.title} | {profileData.department}</p>
          <p>*Local Time* | *Weather* </p>
        </div>

        <div className='profile-section'>
          <p>Interests and Hobbies</p>
        </div>

        <div className='profile-section'>
          <p>What's Up</p>
          <p>{profileData.status}</p>
        </div>

        <div className='profile-section'>
          <p>Social Links</p>
          {!profileData.twitter_url ? '' : <a href={profileData.twitter_url}>{twitter_svg}</a>}
          {!profileData.linkedin_url ? '' : <a href={profileData.linkedin_url}>{linkedin_svg}</a>}
          {!profileData.ig_url ? '' : <a href={profileData.ig_url}>{ig_svg}</a>}
        </div>

        <div className='profile-section'>
          <p>Reach Out</p>
          <p>{profileData.mobile}</p>
          <p>{profileData.landline}</p>
          <p>{profileData.personal_email}</p>
          <p>{profileData.website_url}</p>
          <p>{profileData.office}</p>
          <p>{profileData.business_address}</p>
        </div>

      </div>
    )

  }

}


export default Profile