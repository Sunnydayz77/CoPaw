import React, { Component } from 'react'
import { updateProfile, readOneProfile, createProfile } from '../services/user-helper'

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
        personal_email: ''
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
    const offices = this.state.offices.map((office, index) => {
      return (
        <option key={index} name='office' value={Object.keys(office)[0]}>{Object.keys(office)[0]}</option>
      )
    })
    return (

      <div className="club-create-container">

        <form className='profile-form' onSubmit={this.handleUpdate} >
          <button>Update</button>
          <div className='profile-section'>
            <div className='form-field'>
              <p className='form-label'>Profile Pic Link</p>
              <input name="img_url" type="text" placeholder='https://imgur.com/vhSVnZT'
                value={this.state.profileData.img_url} onChange={this.handleChange}
              />
            </div>

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

          </div>

          <div className='profile-section'>
            <div className='form-field'>
              <p className='form-label'>Status</p>
              <input name="status" type="text" placeholder='What are you up to these days outside of work? How are you feeling?'
                value={this.state.profileData.status} onChange={this.handleChange}
              />
            </div>
          </div>


          <div className='profile-section'>
            <div className='form-field'>
              <p className='form-label'>Twitter</p>
              <input name="twitter_url" type="text" placeholder='https://twitter.com/pambeesley'
                value={this.state.profileData.twitter_url} onChange={this.handleChange}
              />
            </div>

            <div className='form-field'>
              <p className='form-label'>LinkedIn</p>
              <input name="linkedin_url" type="text" placeholder='https://www.linkedin.com/in/pambeesley/'
                value={this.state.profileData.linkedin_url} onChange={this.handleChange}
              />
            </div>

            <div className='form-field'>
              <p className='form-label'>Instagram</p>
              <input name="ig_url" type="text" placeholder='https://instagram.com/pambeesley'
                value={this.state.profileData.ig_url} onChange={this.handleChange}
              />
            </div>
          </div>


          <div className='profile-section'>

            <div className='form-field'>
              <p className='form-label'>Mobile Phone</p>
              <input name="mobile" type="text" placeholder='Incl. country and area codes'
                value={this.state.profileData.mobile} onChange={this.handleChange}
              />
            </div>

            <div className='form-field'>
              <p className='form-label'>Landline</p>
              <input name="landline" type="text" placeholder='Incl. country and area codes'
                value={this.state.profileData.landline} onChange={this.handleChange}
              />
            </div>

            <div className='form-field'>
              <p className='form-label'>Personal Email</p>
              <input name="personal_email" type="text" placeholder='pambeesley@gmail.com'
                value={this.state.profileData.personal_email} onChange={this.handleChange}
              />
            </div>

            <div className='form-field'>
              <p className='form-label'>Personal Website</p>
              <input name="website_url" type="text" placeholder='https://pambeesley.io'
                value={this.state.profileData.website_url} onChange={this.handleChange}
              />
            </div>

            <div className='form-field'>
              <p className='form-label'>Home Office</p>
              <select name='office' onChange={this.handleChange}>
                <option name='office' value="">Choose Office</option>
                {offices}
              </select>

            </div>


            <div className='form-field'>
              <p className='form-label'>Business Address</p>
              <input name="business_address" type="text" placeholder='If not one of the main offices'
                value={this.state.profileData.business_address} onChange={this.handleChange}
              />
            </div>
            
          </div>


        </form>

      </div>

    )
  }
}

export default ProfileForm
