const axios = require('axios');
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://copaws.herokuapp.com' : 'http://localhost:3000'
})


export const readAllUsers = async () => {
  const response = await api.get('/users');
  return response.data;
}


export const readOneUser = async (user_id) => {
  const response = await api.get(`/users/${user_id}`);
  return response.data;
}

export const createProfile = async (profileData) => {
  const response = await api.post(`/profiles`, {profile: profileData} );
  return response.data;
}

export const readOneProfile = async (user_id) => {
  const response = await api.get(`/profiles/${user_id}`);
  return response.data;
}

export const updateProfile = async (profileData) => {
  const response = await api.put(`/profiles/${profileData.user}`, {profile: profileData} );
  return response.data;
}
