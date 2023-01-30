/* eslint-disable no-unused-vars */
import axios from 'axios'

const token = 'e236cccbbfbfd25e08ed7d6a07c51ba2dbc876ef103f695efed43bad261680e7'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: 'asdasdasd'
  }
})

// instance.interceptors.request.use((config) => {
//   // const token = store.getters['auth/getTokenTicketplus']; // TODO: CAMBIAR
//   const token = 'e236cccbbfbfd25e08ed7d6a07c51ba2dbc876ef103f695efed43bad261680e7'

//   config.headers.Authorization = token ? `Bearer ${token}` : ''
//   return config
// })

instance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)

export default instance

// export default axios.create({
//   baseURL: process.env.REACT_APP_API_URL
// })
