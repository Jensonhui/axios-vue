import axios from 'axios'

// 创建axios实例
const service = axios.create({
    baseURL: 'https://cnodejs.org/api/v1',
    timeout: 5000
})

// axios请求体
service.interceptors.request.use( config => {
    let token = '9d44780d-3948-4ac4-9ead-af03ddd83214'
    config.headers.Authentication = token
    return config;
}, error => {
    console.log(error);
    return Promise.reject(error);
})

// axios响应体
service.interceptors.response.use(response => {
    console.log(response);
    if(response.status === 200){
        return response.data;
    }else{
        Promise.reject();
    }
}, error => {
    console.log(error);
    return Promise.reject(error);
})

// async封装axios请求
const RequestHttp = async (config) => {
  try {
    const res = await service(config)
    return Promise.resolve(res.data)
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
}

export default RequestHttp