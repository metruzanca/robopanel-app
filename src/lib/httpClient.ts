import axiosLib from 'axios'

//TODO Move this to env
const BASE_URL = "http://localhost:8080"

export default axiosLib.create({
  baseURL: BASE_URL,
  // auth
  // socketPath
  // headers // for bearer if using JWT
  // timeout
})