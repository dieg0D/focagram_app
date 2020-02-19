import api from './api';

export const createComment = (description, post_id) => {
  return api.post('/comments', {
    description,
    post_id,
  });
};
