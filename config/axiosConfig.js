import axios from 'axios';

// 添加响应拦截器
axios.interceptors.request.use(function (config) {
 // 配置发送请求的信息

 return config;
}, function (error) {
 return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
 // 配置请求回来的信息

 return response;
}, function (error) {
 return Promise.reject(error);
});

var http = axios.create({
 timeout: 8000, /*设置请求超时时间*/
 baseURL:'https://api.zhuniangjia.com', 

});

// Alter defaults after instance has been created
http.defaults.headers.common['Authorization'] = '';

export default http; 