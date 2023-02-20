import axios from 'axios'

export default axios.create({
  baseURL: 'http://13.58.222.181:3000/api'
  // baseURL: 'http://127.0.0.1:3000/api',
})
