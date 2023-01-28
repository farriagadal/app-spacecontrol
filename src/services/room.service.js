import api from '../api/api'

const getRooms = () => new Promise((resolve, reject) => {
  api.get('/rooms')
    .then((response) => {
      resolve(response.rooms)
    })
    .catch((err) => {
      reject(err)
    })
})

const getRoom = (id) => new Promise((resolve, reject) => {
  api.get(`/rooms/${id}`)
    .then((response) => {
      resolve(response.room)
    })
    .catch((err) => {
      reject(err)
    })
})

const createRoom = (room) => new Promise((resolve, reject) => {
  api.post('/rooms', room)
    .then((response) => {
      resolve(response.room)
    })
    .catch((err) => {
      reject(err)
    })
})

export default {
  getRooms,
  getRoom,
  createRoom
}
