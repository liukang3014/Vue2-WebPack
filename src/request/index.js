
import axios from 'axios';

let token = 'tokendata'
// 封装 Axios 实例
const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // 设置你的 .env 中的 API 地址
    timeout: 5000, // 请求超时时间
    headers: {
        // 全局请求-请求头
        'Content-Type': 'application/json',
    },
});

// 请求拦截器
request.interceptors.request.use(
    (config) => {
        console.log(config);
        // 在发送请求之前做些什么
        // 可以在这里添加一些全局的请求处理逻辑

        // 全局请求 Token 添加
        config.headers['Authorization'] = `Bearer ${token}`;

        console.log(config);
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 响应拦截器
request.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default request;
