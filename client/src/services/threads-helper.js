const axios = require('axios');
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://likunamatata-book-club.herokuapp.com' : 'http://localhost:3000'
})

// ==================================
// ================Threads==========
// ==================================


//the table, models, routes, etc. called 'discussions' because Rails wouldn't let me use 'threads'

export const createThread = async (thread) => {
  try {
    const resp = await api.post(`/discussions`, { discussion: thread })
    return resp
  } catch (error) {
    throw error
  }
}


export const getThreads = async () => {
  try {
    const resp = await api.get(`/discussions`)
    return resp
  } catch (error) {
    throw error
  }
}

export const getOneThread = async (thread_id) => {
  try {
    const resp = await api.get(`/discussions/${thread_id}`)
    return resp
  } catch (error) {
    throw error
  }
}

export const deleteThread = async (thread_id) => {
  try {
    const resp = await api.delete(`discussions/${thread_id}`)
    window.location.reload(false)
    return resp
  } catch (error) {
    throw error
  }
}

// ==================================
// ================Comments==========
// ==================================
export const createComment = async (comment) => {
  try {
    const resp = await api.post(`/comments`, { comment: comment })
    return resp
  } catch (error) {
    throw error
  }
}


export const getComments = async (thread_id) => {
  try {
    const resp = await api.get(`/discussions/${thread_id}/comments`)
    return resp.data
  }
  catch (error) {
    throw error
  }
}

export const deleteComment = async (comment_id) => {
  try {
    const resp = await api.delete(`/comments/${comment_id}`)
    window.location.reload(false)
    return resp
  } catch (error) {
    throw error
  }
}