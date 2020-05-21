import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { readOneProfile } from '../services/user-helper'
import { twitter_svg, linkedin_svg, ig_svg } from '../services/svg'
import CreateInterest from './CreateInterest'
import ProfileDetails from './ProfileDetails'

class MyProfile extends Component {
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
    return (
      <div className='my-profile'>
        <Link to='/edit-profile'>
          <button>Edit</button>
        </Link>
        <p>{defaultMessage}</p>
       <ProfileDetails user_id={this.props.currentUser.id}/>

      </div>
    )

  }

}


export default MyProfile