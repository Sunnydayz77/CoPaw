import React, {Component} from 'react'

class ProfileForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userData: props.currentUser
    }
  }

  handleChange = async (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      userData: {
        ...prevState.userData,
        [name]: value
      }
    }));
  }


  handleUpdate = async (e) => {
    e.preventDefault();
    // updateProfile(this.state.userData, this.props.currentUser.id)
  }

  render() {
    return (

      <div className="club-create-container">

        <h1>profile form</h1>
        {/* <form className='club-form' onSubmit={this.handleCreate} >
          <div className='form-field'>
            <p className='form-label'>Club Name</p>
            <input name="name" type="text" placeholder='XX Century Italian Authors'
              value={this.state.clubFormData.name} onChange={this.handleChange}
            />
            <p className='form-instructions'>Choose wisely, you will not be able to update the name of the club</p>
          </div>

          <div className='form-field'>
            <p className='form-label'>Current Book (Google Books Id):</p>
            <input name="google_id" type="text" placeholder='6MEdBQAAQBAJ'
              value={this.state.clubFormData.google_id} onChange={this.handleChange}
            />
            <p className='form-instructions'>You can search for book titles and copy their Google Books Id using the search bar below</p>
          </div>
          <div className='form-field'>
            <p className='form-label'>Rules for Commenting</p>
            <input name="rules" type="text" placeholder='No hate speech, include TW headers, etc.'
              value={this.state.clubFormData.rules} onChange={this.handleChange}
            />
            <p className='form-instructions'>You can search for book titles and copy their Google Books Id using the search bar below</p>
          </div>

          <button>Update</button>
        </form> */}

      </div>

    )
  }
}

export default ProfileForm
