import React, { Component } from 'react'
import ThreadForm from './ThreadForm'
import Threads from './Threads'
import { createThread, getThreads } from '../../services/threads-helper'

class ThreadCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      thread: {
        text: '',
        user_id: props.user_id,
        profile_id: props.profileData.id,
        full_name: props.profileData.full_name
      },
      createdThread: null,
      threads: ''
    }
   console.log('threadcreate props', this.props.profileData.full_name)
  }


  getThreads = async () => {
    try {
      const threads = await getThreads(this.props.club_id)
      this.setState(
        { threads: threads.data }
      )
    } catch (err) {
        console.error(err)
    }
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedThread = Object.assign(this.state.thread, updatedField)
    this.setState({ thread: editedThread })
  }

  addThread = thread =>
  this.setState(prevstate => ({
    threads: [...this.state.threads, thread]
  }))

  handleSubmit = async event => {
    event.preventDefault()
    const res = await createThread(this.state.thread)

    if (res.status === 201) {
      this.addThread(res.data)
      this.setState({
        createdThread: res.data
      })
    }
    this.getThreads()
    this.props.history.push('/');
  } 

  async componentDidMount() {
    this.getThreads()
  }

  render() {
    const { handleChange, handleSubmit } = this
    const { thread, threads } = this.state
    const { history, user_id } = this.props
    return (
      <div className='threads-section'>
        <h2 className='screen-header'>Member threads</h2>
        <ThreadForm
          thread={thread}
          history={history}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="../"
        />
        <Threads user_id={user_id} threads={threads} profileData={this.props.profileData} history={this.props.history}/>
        </div> 
    )
  }
}
export default ThreadCreate
