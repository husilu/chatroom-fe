import axios from 'axios'

const BASE_URL = "http://localhost:3080"

const ajax = axios.create({
    baseURL: BASE_URL
})

ajax.interceptors.response.use(function (response) {
    if (response.data.code === 0) {
        return response.data.data;
    }
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default ajax