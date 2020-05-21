import React from 'react'

const ThreadForm = (props) => {
  const { text} = props.thread
  return (
    <form onSubmit={props.handleSubmit} className='threads-form'>
      <input
          placeholder='Your discussion topic goes here'
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

export default ThreadForm
