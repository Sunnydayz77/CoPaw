import React, { Component } from 'react'
import { readInterestsByProfile } from '../services/user-helper'
import '../styles/Map.css'
import { Link } from 'react-router-dom'


class InterestTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interestData: []
    }
    console.log('interesttags', props)
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
        <Link to={`/community/${interest.id}`} className='interest-tag' key={index}>
          {interest.text}
        </Link>
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