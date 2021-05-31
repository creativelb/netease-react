import axios from 'axios'
import store from '../store/store.js';

let axiosInstant = axios.create({
    baseURL: '/api',
    timeout: 5000
})

// 添加请求拦截器
axiosInstant.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        let token = store.getState().app.token
        config.headers.token = token
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

export const request = function(config) {
    return axiosInstant.request(config)
}

