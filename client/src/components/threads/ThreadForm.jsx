import React from 'react'

const ThreadForm = (props) => {
  const { text } = props.thread
  return (
    <form onSubmit={props.handleSubmit} className='thread-form'>
      <input
        placeholder='Start a thread...'
        value={text}
        name='text'
        type='text'
        required
        onChange={props.handleChange}
        className='comment-input'
      />
      <button className='thread-button'>Enter</button>
    </form>
  )
}

export default ThreadForm
