import React, { Component } from 'react'
import { readAllUsers, readOneProfile } from '../services/user-helper'
import '../styles/Map.css'
import ThreadCreate from './threads/ThreadCreate'
import Axios from 'axios';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserProfile: ''
    }
  }

  componentDidMount = async () => {
    const user_id = !this.props.currentUser ? '' : this.props.currentUser.id
    const response = await readOneProfile(user_id).catch((error) => {
      console.error(error);
    })

    const currentUserProfile = !response ? '' : response[0]
    this.setState({
      currentUserProfile: currentUserProfile
    })
  }

  render() {
    const { currentUserProfile } = this.state
    const threadCreate = !currentUserProfile ? '' : <ThreadCreate
      user_id={this.props.currentUser.id}
      profileData={currentUserProfile}
      history={this.props.history}
    />
    return (
      <div className='home' >
        <h2 className='screen-header'>Worldwide Discussions</h2>
        {threadCreate}
      </div>
    )

  }

}

export default Home;