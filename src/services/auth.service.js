import api from '../api';

const signIn = (payload) => new Promise((resolve) => {
  api.post('/sing-in', payload)
    .then((response) => {
      resolve(response.data);
    });
});

export default {
  signIn,
};
