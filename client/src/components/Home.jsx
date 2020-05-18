import React, {Component} from 'react'
import readAllUsers from '../services/user-helper'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: []
    }
  }

  componentDidMount() {
    this.setState({
      userData: readAllUsers().data
    })
  }

   
  render() {
    const {userData} = this.state
    const users = userData.length == 0 ? '' : userData.map(user => {
      return (
        <div className='user-card'>
          <a>{user.email}</a>
        </div>
        )
    })

    return (
      <div className='landing'>
        <h3>{`Hello ${props.currentUser.username}`}</h3>
        {users}
      </div>
    )
    
  }
 
}

export default Home;