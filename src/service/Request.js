import axios from 'axios'

const service = axios.create({
    baseURL: 'https://cnodejs.org/api/v1',
    timeout: 1000
})

service.interceptors.request.use( config => {
    // let token = common.getCookie('token') || '9d44780d-3948-4ac4-9ead-af03ddd83214'
    let token = '9d44780d-3948-4ac4-9ead-af03ddd83214'
    config.headers.Authentication = token
    return config;
}, error => {
    console.log(error);
    return Promise.reject(error);
})

service.interceptors.response.use(response => {
    if(response.status === 200){
        return response.data;
    }else{
        Promise.reject();
    }
}, error => {
    console.log(error);
    return Promise.reject(error);
})

export const Request = async (config) => {
  try {
    const res = await service(config)
    return res.data
  } catch (error) {
    console.log(error)
  }
}