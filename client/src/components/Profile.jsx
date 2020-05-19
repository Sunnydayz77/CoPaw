import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class SubComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }


  render() {

    return (
      <div className='subComments-display'>
        <h1>profile display</h1>
        <Link to='/edit-profile'>
          <button>Edit</button>
        </Link>
        <a>{this.props.currentUser.email}</a>
      </div>
    )

  }

}


export default SubComments