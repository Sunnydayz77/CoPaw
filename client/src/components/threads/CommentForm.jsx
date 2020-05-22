import React from 'react'

const CommentForm = (props) => {
  const { text } = props.comment
  return (
    <div className='comment-form-container'>
      <img src={props.profileData.img_url} className='pic-small'/>
      <form onSubmit={props.handleSubmit} className='comment-form'>
        <input
          placeholder='Add a comment...'
          value={text}
          name='text'
          type='text'
          required
          onChange={props.handleChange}
          className='comment-input'
        />
      </form>
    </div>

  )
}

export default CommentForm
