import api from '../api/api'

const signIn = (payload) => new Promise((resolve) => {
  api.post('/login', payload)
    .then((response) => {
      resolve(response.data)
    })
    .catch((err) => {
      resolve(err)
    })
})

export default {
  signIn
}
