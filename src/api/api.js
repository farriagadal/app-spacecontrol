import axios from 'axios'

export default axios.create({
  baseURL: 'http://space-load-balancer-1672437956.us-east-2.elb.amazonaws.com'
  // baseURL: 'https://13.58.222.181:3000/api'
  // baseURL: 'http://127.0.0.1:3000/api',
})
