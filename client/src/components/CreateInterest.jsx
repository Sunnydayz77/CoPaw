import React, { Component } from 'react';
import { createInterest, findInterest, addProfileToInterest } from '../services/user-helper';

class CreateInterest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      interestData: {
        text: ''
      }
    }
  }

  handleChange = async (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      interestData: {
        ...prevState.interestData,
        [name]: value
      }
    }));
  }


  handleCreate = async (e) => {
    e.preventDefault();
    const existingInterest = await findInterest(this.state.interestData.text)
    if (existingInterest[0]) {
      addProfileToInterest(existingInterest[0].id, this.props.profile_id)
    }
    else {
      createInterest(this.state.interestData, this.props.profile_id)
    }
  }

  render() {
    return (
      <div className='create-interest'>
        <div className="interest-create-container">
          <form className='interest-form' onSubmit={this.handleCreate} >
            <div className='form-field'>
              <input name="text" type="text" placeholder='Crocheting'
                value={this.state.interestData.text} onChange={this.handleChange}
              />
            </div>

            <button>Add</button>
          </form>
        </div>
      </div>
    )

  }

}

export default CreateInterest;