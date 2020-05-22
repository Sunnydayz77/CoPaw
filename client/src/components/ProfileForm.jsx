import React, { Component } from 'react'
import { updateProfile, readOneProfile, createProfile } from '../services/user-helper'
import { Timezones } from './TimeZones.js';
import CreateInterest from './CreateInterest'
import departmentIcon from '../media/Dept.png'
import interestIcon from '../media/interests.png'
import socialIcon from '../media/social-connect.png'
import statusIcon from '../media/Status.png'
import timezoneIcon from '../media/timezone.png'
import locationIcon from '../media/location.png'


class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: {
        id: '',
        img_url: '',
        full_name: '',
        title: '',
        department: '',
        status: '',
        user_id: props.currentUser.id,
        twitter_url: '',
        linkedin_url: '',
        ig_url: '',
        website_url: '',
        business_address: '',
        mobile: '',
        landline: '',
        office: '',
        personal_email: '',
        timezone: ''
      },
      modified: false,
      offices: [{ 'New York, NY': '10018' }, { 'Boston, MA': '02110' }, { 'Paris, France': '75009' }]
    }
  }

  async componentDidMount() {
    const response = await readOneProfile(this.props.currentUser.id)
    if (response.length > 0) {
      this.setState({
        profileData: response[0],
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
    this.state.modified ? updateProfile(this.state.profileData) : createProfile(this.state.profileData)
  }

  render() {
    const { profileData } = this.state
    const offices = this.state.offices.map((office, index) => {
      return (
        <option key={index} name='office' value={Object.keys(office)[0]}>{Object.keys(office)[0]}</option>
      )
    })
    return (

        <form className='profile-form' onSubmit={this.handleUpdate}>

          <div className='profile'>

            <div className='profile-top-update'>

              <div className='quick-info-update'>

              <div className='profile-section'>
                <p className='section-header'>Profile Image</p>
                  <input name="img_url" type="text" placeholder='https://imgur.com/'
                    value={this.state.profileData.img_url} onChange={this.handleChange}
                  /> 
                    <p className='section-header'>Full Name</p>
                    <input name="full_name" type="text" placeholder='Full Name'
                      value={this.state.profileData.full_name} onChange={this.handleChange}
                /> 
                    <p className='section-header'>Position</p>
                    <input name="title" type="text" placeholder='Solutions Engineer'
                      value={this.state.profileData.title} onChange={this.handleChange}
                    />
                
                </div>
              </div>

            <div className='profile-section'>
                <br />
                <br />
                <br />
              <div>
                <div>
                  <img src={statusIcon} className='section-icon' />
                <p className='section-header'>Status</p>
                  <input name="status" type="text" placeholder='What are you up to these days outside of work?'
                    value={this.state.profileData.status} onChange={this.handleChange}
                  />
                </div>
              </div>
              </div>

            </div>
          <hr/>
          <div className='profile-bottom'>

              <div className='profile-details'>
                <div className='profile-section'>
                  <img src={departmentIcon} className='section-icon' />
                  <div>
                    <p className='section-header'>Department</p>
                    <input name="department" type="text" placeholder='Technical Solutions'
                      value={this.state.profileData.department} onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className='profile-section'>
                  <img src={locationIcon} className='section-icon' />
                  <div>
                    <p className='section-header'>Office</p>
                    <select name='office' onChange={this.handleChange}>
                      <option name='office' value="">Select One</option>
                      {offices}
                    </select>
                  </div>
                </div>

                <div className='profile-section'>
                  <img src={timezoneIcon} className='section-icon' />
                <div>
                <p className='section-header'>Timezone</p>
                    <select name='timezone' onChange={this.handleChange}>
                      <option value="">Select One</option>
                      {Timezones.map((timezone, index) => <option key={index} value={timezone.value}>{timezone.name}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div className='profile-links'>

                <div className='profile-section'>
                  <img src={interestIcon} className='section-icon' />
                  <div>
                    <p className='section-header'>Interests</p>
                    <CreateInterest profile_id={profileData.id} />

                  </div>
                </div>

                <div className='profile-section'>
                  <img src={socialIcon} className='section-icon' />
                  <div>
                    <p className='section-header'>Social Media</p>
                    <div className='social-inputs'>
                      <input name="twitter_url" type="text" placeholder='https://twitter.com/pambeesley'
                        value={this.state.profileData.twitter_url} onChange={this.handleChange}
                      />
                      <input name="linkedin_url" type="text" placeholder='https://www.linkedin.com/in/pambeesley/'
                        value={this.state.profileData.linkedin_url} onChange={this.handleChange}
                      />

                      <input name="ig_url" type="text" placeholder='https://instagram.com/pambeesley'
                        value={this.state.profileData.ig_url} onChange={this.handleChange}
                      />

                    </div>
                  </div>

                </div>
              </div>
            </div>


          </div>
        
        <button className="update-button">Submit Update</button>
      </form>

    )
  }
}

export default ProfileForm;
