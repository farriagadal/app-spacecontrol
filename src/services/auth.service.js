import api from '../api/api'

const signIn = (payload) => new Promise((resolve, reject) => {
  api.post('/login', payload)
    .then((response) => {
      resolve(response.data)
    })
    .catch((err) => {
      reject(err)
    })
})

const signUp = (payload) => new Promise((resolve, reject) => {
  api.post('/sign-up', payload)
    .then((response) => {
      resolve(response.data)
    })
    .catch((err) => {
      reject(err)
    })
})

const resendEmail = (payload) => new Promise((resolve, reject) => {
  api.post('/resend-email', payload)
    .then((response) => {
      resolve(response.data)
    })
    .catch((err) => {
      reject(err)
    })
})

const verifyEmail = (token) => new Promise((resolve, reject) => {
  api.get(`/verify-email?token=${token}`)
    .then((response) => {
      resolve(response.data)
    })
    .catch((err) => {
      reject(err)
    })
})

export default {
  signIn,
  signUp,
  resendEmail,
  verifyEmail
}
