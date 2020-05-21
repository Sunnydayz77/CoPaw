import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { readOneProfile, readAllInterests, readAllProfiles } from '../services/user-helper'
import { twitter_svg, linkedin_svg, ig_svg } from '../services/svg'
import Timer from './Timer';
import '../styles/Profile.css'
import departmentIcon from '../media/Dept.png'

class ProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: '',
      defaultMessage: '',
      interestData: []
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
  }


  render() {
    const { profileData, defaultMessage, interestData } = this.state
    const { timezone } = profileData
    const timer = !profileData ? '' : <Timer differenceUTC={timezone} />

    const interests = interestData.length === 0 ? '' : interestData.map((interest, index) => {
      return (
        <a href='' className='interest-tag' key={index}>
          {interest.text}
        </a>
      )
    })

    return (
        <div className='profile'>
          <p>{defaultMessage}</p>

          <div className='profile-top'>

            <div className='quick-info'>

              <div className='profile-section'>
                <img className='pic-large' src={profileData.img_url} />
                <div>
                  <p className='section-header'>{profileData.full_name}</p>
                  <p>{profileData.title}</p>
                </div>
              </div>

            </div>

            <div className='profile-section'>
              <div>
                <p className='section-header'>Status</p>
                <p>{profileData.status}</p>
              </div>
            </div>

          </div>

          <div className='profile-bottom'>

            <div className='profile-details'>
              <div className='profile-section'>
                <img src={departmentIcon} className='section-icon' />
                <div>
                  <p className='section-header'>Department</p>
                  <p>{profileData.department}</p>
                </div>
              </div>
              <div className='profile-section'>
                <img src={departmentIcon} className='section-icon' />
                <div>
                  <p className='section-header'>Office</p>
                  <p>{profileData.office}</p>
                </div>
              </div>

              <div className='profile-section'>
                <img src={departmentIcon} className='section-icon' />
                <div>
                  <p className='section-header'>Timezone</p>
                  {timer}
                </div>
              </div>
            </div>

            <div className='profile-links'>

              <div className='profile-section'>
                <img src={departmentIcon} className='section-icon' />
                <div>
                  <p className='section-header'>Interests</p>
                  <div className='tag-container'>
                    {interests}
                  </div>

                </div>
              </div>

              <div className='profile-section'>
                <img src={departmentIcon} className='section-icon' />
                <div>
                  <p className='section-header'>Social Media</p>
                  <div className='tag-container'>
                    {!profileData.twitter_url ? '' : <a target='_twitter' href={profileData.twitter_url} className='social-svg'>{twitter_svg}</a>}
                    {!profileData.linkedin_url ? '' : <a target='_linkedin' href={profileData.linkedin_url} className='social-svg'>{linkedin_svg}</a>}
                    {!profileData.ig_url ? '' : <a target='_ig' href={profileData.ig_url} className='social-svg'>{ig_svg}</a>}
                  </div>
                </div>

              </div>
            </div>
          </div>


        </div>
    )

  }

}


export default ProfileDetails