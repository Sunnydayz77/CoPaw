import React, { Component } from 'react'
import {updateProfile, readOneProfile, createProfile} from '../services/user-helper'

class ProfileForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      profileData: {
        full_name: '',
        title: '',
        department: '',
        status: '',
        user_id: props.currentUser.id
      },
      modified: false
    }

  }

  async componentDidMount() {
    const response = await readOneProfile(this.props.currentUser.id)
    if (response) {
      this.setState({
        userData: response,
        modified: true
      })
    }
  }

  handleChange = async (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      profileData: {
        ...prevState.profileData,
        [name]: value
      }
    }));
  }


  handleUpdate = async (e) => {
    e.preventDefault();
    console.log('userData before Update', this.state.profileData)
    this.state.modified ? updateProfile(this.state.profileData) : createProfile(this.state.profileData)
  }

  render() {
    console.log(this.state.profileData)
    return (

      <div className="club-create-container">

        <h1>profile form</h1>
        <form className='club-form' onSubmit={this.handleUpdate} >
          <div className='form-field'>
            <p className='form-label'>Full Name</p>
            <input name="full_name" type="text" placeholder='Pam Beesly'
              value={this.state.profileData.full_name} onChange={this.handleChange}
            />
          </div>

          <div className='form-field'>
            <p className='form-label'>Title</p>
            <input name="title" type="text" placeholder='Solutions Engineer'
              value={this.state.profileData.title} onChange={this.handleChange}
            />
          </div>
          <div className='form-field'>
            <p className='form-label'>Department</p>
            <input name="department" type="text" placeholder='Technical Solutions'
              value={this.state.profileData.department} onChange={this.handleChange}
            />
          </div>

          <div className='form-field'>
            <p className='form-label'>Status</p>
            <input name="department" type="text" placeholder='What are you up to these days outside of work? How are you feeling?'
              value={this.state.profileData.status} onChange={this.handleChange}
            />
          </div>


          <button>Update</button>
        </form>

      </div>

    )
  }
}

export default ProfileForm
