import React from 'react'

const CommentForm = (props) => {
  const { text} = props.comment
  return (
      <form onSubmit={props.handleSubmit} className='comments-form'>
      <input
          placeholder='Your comment goes here'
          value={text}
          name='text'
          type='text'
          required
          onChange={props.handleChange}
        />
      <button>Post</button>
      </form>
  )
}

export default CommentForm
