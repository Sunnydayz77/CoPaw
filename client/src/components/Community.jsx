import React, { Component } from 'react'
import { readAllProfiles, findInterest, readProfilesByInterest } from '../services/user-helper'
import { Link } from 'react-router-dom'
import '../styles/Community.css'
import InterestTags from './InterestTags'

class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: [],
      interestData: [],
      interestQuery: '',
      interest_id: '',
      nameQuery: '',
      officeQuery: ''
    }
  }

  async componentDidMount() {
    const interest_id = this.props.interest_id
    const response = await readProfilesByInterest(interest_id)
    this.setState({
      profileData: response
    })
  }

  styleFix = {
    color: 'black'
  }

  render() {
    const { profileData } = this.state

    const profiles = profileData.length === 0 ? <h1>No one is interested in that. Why are you?</h1> : profileData.map((profile, index) => {
      return (
        <div className='community-container' key={index}>

          <div className='community-card' >
            <img src={profile.img_url} className='pic-large' />
            <div className='community-card-section'>
              <a href={`/profile/${profile.id}`} className='section-header' style={this.styleFix} >{profile.full_name}</a>
              <p>{profile.title}</p>
            </div>

            <div className='community-card-section'>
              <p className='section-header'>Status</p>
              <p>{profile.status}</p>
            </div>

            <div className='community-card-section'>
              <p className='section-header'>Interests</p>
              <InterestTags profile_id={profile.id} />
            </div>

          </div>
        </div>
      )
    })

    return (
      <div className='community'>
        <div className='community-display'>
          <p className='community-header' style={this.styleFix}>{`Showing results for ${profileData.length} community members`}</p>
          {profiles}
        </div>

      </div>
    )

  }

}

export default Community;