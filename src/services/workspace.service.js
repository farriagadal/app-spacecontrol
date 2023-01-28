import api from '../api/api'

const createWorkspace = (payload) => new Promise((resolve, reject) => {
  api.post('/workspaces', payload)
    .then((response) => {
      resolve(response.data)
    })
    .catch((err) => {
      reject(err)
    })
})

export default {
  createWorkspace
}
