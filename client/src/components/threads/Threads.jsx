import React, { Component } from 'react'
import { deleteThread } from '../../services/threads-helper'
import CommentCreate from './CommentCreate';


class Threads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      threads: []
    }

  }

  handleDelete = (thread_id) => {
    deleteThread(thread_id);
    this.props.history.push('/');
  }


  render() {

    const { threads, user_id, profileData } = this.props
    console.log(threads)

    const renderThreads = () => {
      
      if (threads) {
        return threads.map((thread, index) => {
          return (
            <div className="thread" key={index}>
              <p className='thread-text'>"{thread.text}"</p>
              <p className='thread-username'>{thread.full_name}</p>
              {user_id === thread.user_id ? <button onClick={() => this.handleDelete(thread.id)}>Delete Thread</button> : null}
              <CommentCreate thread_id={thread.id} user_id={user_id} profileData={profileData}/>
            </div>
          )
        })
      } else {
        return null
      }
    }

    return (
      <div className='threads-display'>
        {!threads ? <h3>No threads at this time.</h3> : renderThreads()}
      </div>
    )

  }

}


export default Threads