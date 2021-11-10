import Axios from 'axios'
import { baseURL, nasaUrl } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const nasaApi = Axios.create({
  baseURL: nasaUrl,
  timeout: 8000
})
