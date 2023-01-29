import api from '../api/api'

const connectDevice = (payload) => new Promise((resolve, reject) => {
  api.post('/rooms/connect', payload)
    .then((response) => {
      resolve(response)
    })
    .catch((err) => {
      reject(err.response)
    })
})

const execAction = (payload) => new Promise((resolve, reject) => {
  api.put('/device', payload)
    .then((response) => {
      resolve(response.data)
    })
    .catch((err) => {
      reject(err)
    })
})

const verifyToken = (payload) => new Promise((resolve, reject) => {
  api.get('/device/verify')
    .then((response) => {
      resolve(response.data)
    })
    .catch((err) => {
      reject(err)
    })
})

export default {
  connectDevice,
  execAction,
  verifyToken
}
