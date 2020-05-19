import React, {Component} from 'react'
import { readAllUsers } from '../services/user-helper'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: []
    }
  }

  async componentDidMount() {
    const response = await readAllUsers()
    this.setState({
      userData: response
    })
  }

   
  render() {
    const { userData } = this.state
    console.log('userData', userData)
    const users = userData.length === 0 ? '' : userData.map( (user, index) => {
      return (
        <div className='user-card' key={index}>
          <p>{user.email}</p>
        </div>
        )
    })

    return (
      <div className='landing'>
        <h3>{`Hello ${this.props.currentUser.email}`}</h3>
        {users}
      </div>
    )
    
  }
 
}

export default Home;