import React, { Component } from 'react'
import { readInterestsByProfile } from '../services/user-helper'
import '../styles/Map.css'


class InterestTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interestData: []
    }
    console.log(props)
  }

  componentDidMount = async () => {
    const response = await readInterestsByProfile(this.props.profile_id)
    this.setState({
      interestData: response
    })
  }
  
  render() {
    const {interestData} = this.state
    const interests = interestData.length === 0 ? '' : interestData.map((interest, index) => {
      return (
        <a href='' className='interest-tag' key={index}>
          {interest.text}
        </a>
      )
    })

    return (
      <div className='interest-tag-container' >
        {interests}
      </div>
    )

  }

}

export default InterestTags;