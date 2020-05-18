import React, { Component } from 'react'


class SubComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }

  }


  render() {

    return (
      <div className='subComments-display'>
        <h1>profile display</h1>
      </div>
    )

  }

}


export default SubComments