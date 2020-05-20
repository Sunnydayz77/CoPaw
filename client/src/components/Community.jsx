import React, { Component } from 'react'
import { readAllProfiles, findInterest, readProfilesByInterest, readAllInterests } from '../services/user-helper'
import { Link } from 'react-router-dom'

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
    const profiles = await readAllProfiles()
    const interests = await readAllInterests()
    this.setState({
      profileData: profiles,
      interestData: interests
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    console.log(this.state.interestQuery)
    const interest_id = await findInterest(this.state.interestQuery)
    const response = await readProfilesByInterest(interest_id[0].id)
    this.setState({
      profileData: response
    })
  }


  render() {
    const { profileData, interestData } = this.state
    console.log('prof data in render', profileData)
    const profiles = profileData.length === 0 ? '' : profileData.map((profile, index) => {
      return (
        <div className='user-card' key={index}>

          <Link className='user-card' to={`/profile/${profile.user_id}`}>
            <p>{profile.full_name}</p>
            <p>{profile.title}</p>
            <p>{profile.office}</p>
          </Link>
        </div>
      )
    })

    const interests = interestData.length === 0 ? '' : interestData.map((interest, index) => {
      return (
          <button >
            {interest.text}
          </button>
      )
    })

    return (
      <div className='community'>
        {interests}
        <div className='search-field'>
          <p className='form-label'>Interest</p>
          <input name="interestQuery" type="text" placeholder='e.g., skiing'
            value={this.state.interestQuery} onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Search</button>
        </div>

        {profiles}
      </div>
    )

  }

}

export default Community;