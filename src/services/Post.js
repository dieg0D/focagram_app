import api from './api';

export const createPost = (description, user_id, picture) => {
  return api.post('/posts', {
    description,
    user_id,
    picture,
  });
};

export const indexPost = () => {
  return api.get('/posts');
};

export const showPost = post_id => {
  return api.get(`/posts/${post_id}`);
};
