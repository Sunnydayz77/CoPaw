import React, { Component } from 'react';
import { createInterest, findInterest, addProfileToInterest } from '../services/user-helper';
import SearchFunction from './SearchFunction';



class CreateInterest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      interestData: {
        text: ''
      }
    }
  }

  componentDidMount = async () => {
    const result = await findInterest('skupiti');
    console.log('did it work', result)
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
    console.log('keyword in create', this.state.interestData.text)
    console.log('existingInterest', existingInterest)
    if (existingInterest[0]) {
      console.log('existingInterest', existingInterest[0].id, this.props.profile_id)
      addProfileToInterest(existingInterest[0].id, this.props.profile_id)
    }
    else {
      createInterest(this.state.interestData, this.props.profile_id)
    }
  }

  render() {
    return (
      <div className='create-interest'>
        <h2 className='screen-header'>Add Interests Here</h2>
        <div className="interest-create-container">
          <form className='club-form' onSubmit={this.handleCreate} >
            <div className='form-field'>
              <p className='form-label'>Interest</p>
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