import React, { Component } from 'react'
import { deleteComment } from '../../services/threads-helper'


class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }

  }


  render() {

    const { comments, user_id, comment_id } = this.props

    const renderComments = () => {
      if (comments) {
        return comments.map( (comment, index) => {
          return (
            <div className="comment" key={index}>
              <p className='comment-text'>"{comment.text}"</p>
              <p className='comment-user'>{comment.full_name}</p>
              {user_id === comment.user_id ? <button onClick={() =>deleteComment(comment_id, comment.id) }>Delete</button> : null}
            </div>
          )
        })
      } else {
        return null
      }
    }

    return (
      <div className='subComments-display'>
        {!comments ? <h3>No comments at this time.</h3> : renderComments()}
      </div>
    )

  }

}


export default Comments