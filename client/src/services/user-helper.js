const axios = require('axios');
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://copaws.herokuapp.com' : 'http://localhost:3000'
})


export const readAllUsers = async () => {
  const response = await api.get('/users');
  return response.data;
}