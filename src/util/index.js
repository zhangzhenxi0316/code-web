import axios from 'axios'
import qs from 'qs'

axios.defaults.withCredentials = true // 若跨域请求需要带 cookie 身份识别
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// // 请求拦截器
// axios.interceptors.request.use(req => {
//     // 对 post 请求数据进行处理
//     if (req.method === 'post') {
//         Object.keys(req.data).forEach(item => {
//             !isPrimeval(req.data[item]) && (req.data[item] = JSON.stringify(req.data[item]))
//         })
//         req.data = qs.stringify(req.data)
//     }
//     return req
// }, error => {
//     // 请求出错时处理
//     return Promise.reject(error)
// })
export default axios