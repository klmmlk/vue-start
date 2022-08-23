import axios from "axios";
import { ElLoading, ElMessage } from 'element-plus'

let loadingObj = null
const Serivce = axios.create({
    timeout: 8000,
    baseURL: '/api',
    headers: {
        "Content-type": 'application/json;charset=utf-8'
    }
})

// 拦截器
// 请求拦截
Serivce.interceptors.request.use(config => {
    loadingObj = ElLoading.service({
        lock: true,
        text: 'loading',
        background: 'rgba(0,0,0,0.7)'
    })
    return config
})
// 响应拦截
Serivce.interceptors.response.use(response => {
    loadingObj.close()
    // console.log(response.data.code);
    if (response.data.code != 20000) {
        ElMessage({
            message: response.data.error,
            type: 'warning',
            duration: 2000
        })
    }
    return response.data


    // return 123
}, error => {
    loadingObj.close()
    ElMessage({
        message: '服务器错误',
        type: 'warning',
        duration: 2000
    })

    return error
})

// post请求
export const post = config => {
    return Serivce({
        ...config,
        method: "post",
        data: config.data
    })
}

// get请求
export const get = config => {
    return Serivce({
        ...config,
        method: "get",
        data: config.data
    })
}