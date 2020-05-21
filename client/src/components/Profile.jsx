import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { readOneProfile, readAllInterests, readAllProfiles } from '../services/user-helper'
import ProfileDetails from './ProfileDetails'
import Timer from './Timer';
import '../styles/Profile.css'

import departmentIcon from '../media/Dept.png'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilesList: [],
    }
    console.log('profile props', props)
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

    const interests = await readAllInterests()
    this.setState({
      interestData: interests
    })

    const profiles = await readAllProfiles()
    this.setState({
      profilesList: profiles
    })

  }


  render() {
    const { profilesList } = this.state

    const profiles = profilesList.length === 0 ? '' : profilesList.map((profile, index) => {
      return (
        <Link to={`/profiles/${profile.id}`} className='prof-list-link'>
          <img src={profile.img_url} className='pic-small' />
          <p>{profile.full_name}</p>
        </Link>
      )
    })

    return (
      <div className='profile-container'>
        <div className='profiles-list'>
          {profiles}
        </div>

        <ProfileDetails user_id={this.props.user_id}/>
      </div>
    )

  }

}


export default Profile