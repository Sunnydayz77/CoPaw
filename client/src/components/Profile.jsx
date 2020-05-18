import React, { Component } from 'react'
import ProfileForm from './ProfileForm'
import ProfileDisplay from './ProfileDisplay'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false
    }

  }

  modeSwitch = () => {
    this.setState({
      edit: !this.state.edit
    })
  }


  render() {
    const profileMode = !this.state.mode ? <ProfileDisplay /> : <ProfileForm />
    const modeButton = !this.state.mode ? <button onClick={this.modeSwitch}>Edit</button> : <button onClick={this.modeSwitch}>Save</button>

    return (
      <div className='employee-profile'>
        <h1>Dis the employee profile</h1>
        {modeButton}
        {profileMode}
      </div>
    )
  }
}

export default Profile
