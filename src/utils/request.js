import axios from 'axios'

axios.defaults.timeout = 15000

//基础路径
// axios.defaults.baseURL = ''

const Axios = axios.create()

//请求默认添加请求头
Axios.interceptors.request.use(
  config => {
    config.headers['x-access-token'] = 'token'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

Axios.interceptors.response.use(
  response => {
    return [200, 304].indexOf(response.status) > -1 ? Promise.resolve(response) : Promise.reject(response)
  },
  error => {
    console.error('interceptors-response', error)
    return Promise.reject(error)
  }
)

/**
 *
 * @param {*} method 请求方式
 * @param {*} url 请求url 相对路径，相对于baseurl
 * @param {*} data
 */
export async function baseRequest(method, url, data) {
  process.env.NODE_ENV !== 'production' && console.log('请求调试', method, url, data)
  const httpDefaultOpts = { method, url }
  data = data || {}
  if (method.toLowerCase() === 'post') {
    httpDefaultOpts.data = data
  } else {
    data.timeStamp = Date.now()
    httpDefaultOpts.params = data
  }
  try {
    const result = await Axios(httpDefaultOpts)
    return result.data
  } catch (e) {
    //请求异常
    console.error('httpService', e)
    return { code: 500, errmsg: '请求发生异常', data: null }
  }
}

const httpRequest = async(method, url, data) => {
  const result = await baseRequest(method, url, data)
  return result
}

export default httpRequest
