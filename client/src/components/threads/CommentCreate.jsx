import React, { Component } from 'react'
import CommentForm from './CommentForm'
import Comments from './Comments'
import { createComment, getComments } from '../../services/threads-helper'

class CommentCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: {
        text: '',
        user_id: props.user_id,
        profile_id: props.profile_id,
        full_name: props.profileData.full_name,
        discussion_id: props.thread_id,
        img_url: props.profileData.img_url,
        title: props.profileData.title
      },
      createdComment: null,
      comments: []
    }
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedComment = Object.assign(this.state.comment, updatedField)
    this.setState({ Comment: editedComment })
  }

  addComment = comment =>
    this.setState(prevstate => ({
      comments: [...this.state.comments, comment]
    }))

  handleSubmit = async event => {
    event.preventDefault()
    const res = await createComment(this.state.comment)

    if (res.status === 201) {
      this.addComment(res.data)
      this.setState({
        createdComment: res.data
      })
    }
    const response = await getComments(this.props.thread_id);
    this.setState({
      comments: response
    })
  }

  async componentDidMount() {
    const response = await getComments(this.props.thread_id);
    this.setState({
      comments: response
    })
  }

  render() {
    const { handleChange, handleSubmit } = this
    const { comment, comments } = this.state
    const { history, user_id, thread_id } = this.props
    return (
      <div className='comments-section'>
        <CommentForm
          comment={comment}
          history={history}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="../"
          profileData={this.props.profileData}
        />
        <Comments user_id={user_id} thread_id={thread_id} comments={comments} />
      </div>
    )
  }
}
export default CommentCreate
