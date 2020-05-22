const axios = require('axios');
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://copaw.herokuapp.com' : 'http://localhost:3000'
})


export const readAllUsers = async () => {
  const response = await api.get('/users');
  return response.data;
}


export const readOneUser = async (user_id) => {
  const response = await api.get(`/users/${user_id}`);
  return response.data;
}

export const readAllProfiles = async () => {
  const response = await api.get('/profiles');
  return response.data;
}

export const createProfile = async (profileData) => {
  const response = await api.post(`/profiles`, {profile: profileData} );
  return response.data;
}

export const readOneProfile = async (user_id) => {
  const response = await api.get(`/users/${user_id}/profile`);
  return response.data;
}

export const updateProfile = async (profileData) => {
  const response = await api.put(`/profiles/${profileData.id}`, {profile: profileData} );
  return response.data;
}


export const findInterest = async (keyword) => {
  const response = await api.get(`/interests/keyword/${keyword}`);
  return response.data;
}

export const createInterest = async (interestData, profile_id) => {
  const response = await api.post(`/profiles/${profile_id}/interests`, { interest: interestData });
  return response.data;
}

export const addProfileToInterest = async (interest_id, profile_id) => {
  const response = await api.post(`/profiles/${profile_id}/interests/${interest_id}`);
  return response.data;
}

export const readProfilesByInterest = async (interest_id) => {
  const response = await api.get(`/profiles/byinterest/${interest_id}`);
  return response.data;
}

export const readAllInterests = async () => {
  const response = await api.get('/interests');
  return response.data;
}

export const readInterestsByProfile = async (profile_id) => {
  const response = await api.get(`/interests/profile/${profile_id}`);
  return response.data;
}