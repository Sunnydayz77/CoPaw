import React, { Component } from 'react'
import { deleteThread } from '../../services/threads-helper'
import CommentCreate from './CommentCreate';
import '../../styles/Threads.css'
import { Link } from 'react-router-dom'


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

    const renderThreads = () => {

      if (threads) {
        return threads.map((thread, index) => {
          return (
            <div className="thread-container" key={index}>
              <div className='thread-header'>
              <Link to={`/profiles/${thread.user_id}`}><img src={thread.img_url} className='pic-small' /></Link>
                <div className='thread-header-text'>
                  <p className='thread-username'>{thread.full_name}</p>
                  <p className='thread-title'>{thread.title}</p>
                </div>
              </div>
            
              <div className='thread-body'>
                <p className='thread-text'>{thread.text}</p>
                {user_id === thread.user_id ? <button onClick={() => this.handleDelete(thread.id)} className='delete-button'>Delete</button> : null}
                <hr></hr>
                
                <CommentCreate thread_id={thread.id} user_id={user_id} profileData={profileData} />
              </div>

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