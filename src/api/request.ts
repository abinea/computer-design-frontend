import axios from 'axios'
import { message } from 'ant-design-vue'

const service = axios.create({
  baseURL: '/api',
  timeout: 30000,
})

service.interceptors.request.use(
  (req) => req,
  (err) => {
    message.error('请求失败')
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  (res) => {
    const body = res.data
    console.log('请求返回', body)
    if (body.code !== 0) {
      return body
    } else {
      const msg = body.message || '请求失败，请检查数据是否正确'
      message.error(msg, 2)
      console.log(msg)
    }
  },
  (err) => {
    console.error(err)
    message.error(err.message, 2)
    return Promise.reject(err.message)
  }
)

export default service
