import api from '../api';

const signIn = (payload) => new Promise((resolve) => {
  api.post('/login', payload)
    .then((response) => {
      resolve(response.data);
    });
});

export default {
  signIn,
};
