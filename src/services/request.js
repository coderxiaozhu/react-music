import axios from "axios";

import { baseURL, timeout } from "./config";

const instance = axios.create({
    baseURL,
    timeout
})

// 请求拦截器
instance.interceptors.request.use(config => {
    return config;
}, err => {
    return err
})

// 相应拦截器
instance.interceptors.response.use(response => {
    return response.data
}, err => {
    if(err && err.response) {
        switch(err.response.status) {
            case 400:
                err.message = "请求错误"
                break;
            case 401:
                err.message = "未授权访问"
                break;
            default:
                console.log(err);
        }
    }
    return err;
})

export default instance