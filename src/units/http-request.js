import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant'
import router from '@/router/index'
import CookieTool from '@/units/cookie-tool'
import GetHttpConfig from '@/units/http-config'

Toast.setDefaultOptions('loading', { overlay: true, duration: 15000 })

// 获取参数
const httpconfig = new GetHttpConfig()
const cookieconfig = new CookieTool()
const baseUrl = httpconfig.getNodeEnvData().httpUrl
const token = cookieconfig.getCookie('token') || 'ca2bb801-ae9f-4aa4-b78a-34f02671c309'

console.log(baseUrl)

// 自定义axios
const httpRequest = axios.create({ timeout: 5000 })
httpRequest.defaults.headers.common.Authorization = token
httpRequest.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
httpRequest.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// 拦截器
httpRequest.interceptors.request.use(config => {
  // 是否展示loading动画
  const { headers: { isLoading } } = config
  !isLoading ? Toast.clear() : Toast.loading()
  return config
}, err => {
  return Promise.reject(err)
})

// 响应器
httpRequest.interceptors.response.use(response => {
  Toast.clear()
  return response
}, (err) => {
  if (err.response) {
    switch (err.response.status) {
      case 401:
        router.replace('/login')
        break
      case 404:
        router.replace('/notfind')
        break
    }
  }
  Toast.clear()
  return Promise.reject(err)
})

const axiosPost = (httpurl, value, option) => {
  const dbvalue = qs.stringify(value) // 序列化参数
  return httpRequest({
    url: baseUrl + httpurl,
    method: 'POST',
    headers: { ...option },
    data: dbvalue
  })
}

const axiosGet = (httpurl, value, option) => {
  return httpRequest({
    url: baseUrl + httpurl,
    method: 'GET',
    headers: { ...option },
    params: value
  })
}

export { axiosPost, axiosGet }
