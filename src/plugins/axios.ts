import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
export { AxiosInstance } from 'axios'

const service: AxiosInstance = axios.create({
  timeout: 5000,
  baseURL: '/dev'
})

service.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    return config
  },
  (error): Promise<any> => {
    return Promise.resolve(error)
  }
)

service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  error => {
    return Promise.resolve(error)
  }
)

export default service
