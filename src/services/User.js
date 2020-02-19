import api from './api';

export const login = (email, password) => {
  return api.post('/auth/login', {
    email,
    password,
  });
};

export const register = (name, username, email, password) => {
  return api.post('/users', {
    name,
    username,
    email,
    password,
  });
};

export const showUser = id => {
  return api.get(`/users/${id}`);
};

export const updateProfile = (avatar, name, username, id) => {
  return api.put(`/users/${id}`, {
    avatar,
    name,
    username,
  });
};

export const updatePassword = (
  old_password,
  password,
  password_confirmation,
  id
) => {
  return api.put(`/users/${id}`, {
    old_password,
    password,
    password_confirmation,
  });
};
