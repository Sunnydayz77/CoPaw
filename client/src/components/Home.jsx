import React, {Component} from 'react'
import { readAllUsers, readAllProfiles } from '../services/user-helper'
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: []
    }
  }

  async componentDidMount() {
    const response = await readAllProfiles()
    this.setState({
      profileData: response
    })
  }

   
  render() {
    const { profileData } = this.state
    const profiles = profileData.length === 0 ? '' : profileData.map( (profile, index) => {
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

    return (
      <div className='landing'>
        {profiles}
      </div>
    )
    
  }
 
}

export default Home;