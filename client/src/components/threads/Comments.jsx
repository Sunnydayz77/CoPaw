import React, { Component } from 'react'
import { deleteComment } from '../../services/threads-helper'
import { Link } from 'react-router-dom'


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
      if (comments.length > 0) {
        return comments.map((comment, index) => {
          return (
            <div className="comment-container" key={index}>
              <Link to={`/profiles/${comment.user_id}`}><img src={comment.img_url} className='pic-small' /></Link>
              <div className='comment-body'>
                <div className='comment-text'>
                  <p className='comment-user'>{comment.full_name} | {comment.title}</p>
                  <p className='comment-text'>{comment.text}</p>
                </div>
                {user_id === comment.user_id ? <button onClick={() => deleteComment(comment.id)} className='delete-button'>Delete</button> : null}
              </div>

            </div>
          )
        })
      } else {
        return null
      }
    }

    return (
      <div className='comments-display'>
        {!comments ? <h3>No comments at this time.</h3> : renderComments()}
      </div>
    )

  }

}


export default Comments