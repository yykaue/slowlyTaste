import Cookies from 'js-cookie';
import axios from 'axios';

let Interface = {};

// 自定义判断元素类型JS
Interface.toType = function (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};

// 参数过滤函数
Interface.filterNull = function (o) {
    for (var key in o) {
        if (o[key] === null) {
            delete o[key];
        }
        if (Interface.toType(o[key]) === 'string') {
            o[key] = o[key].trim();
        } else if (Interface.toType(o[key]) === 'object') {
            o[key] = Interface.filterNull(o[key]);
        } else if (Interface.toType(o[key]) === 'array') {
            o[key] = Interface.filterNull(o[key]);
        }
    }
    return o;
};

//401重新登录
// Interface.reLogin = (req) => {
//   if (req.status === 401) {
//     Cookies.remove('rank', {
//         domain: 'localhost'
//     })
//     window.location.href = '/landing'
//   }
// }

const service = axios.create();


//请求拦截器
service.interceptors.request.use(function (config) {
    return config;
}, function (err) {
    return Promise.reject(err)
})

//响应拦截器
// service.interceptors.response.use(response => {
//   Interface.reLogin(response)
//   return response
// }, err => {
//   Interface.reLogin(err.response)
//   return Promise.reject(err)
// })


Interface.API = function (method, url, params) {
    if (!Cookies.get('rank')) {
        return;
    }
    if (params) {
        params = Interface.filterNull(params);
    }
    return new Promise(function (resolve, reject) {
        service({
            method: method,
            url: url,
            data: method === 'POST' || method === 'PUT' ? params : null,
            params: method === 'GET' || method === 'DELETE' ? params : null,
            baseURL: '//ly.zwyst.com/console/userFilter',
            withCredentials: false,
            // timeout: 30000
        }).then(function (res) {
            if (res.status === 200) {
                resolve(res);
            } else {
                console.log(url, '---', res.data.errcode);
            }
        }).catch(function (err) {
            if (reject) {
                reject(err.response);
            } else {
                console.log(url, 'api error, HTTP CODE: ' + err.response.status);
            }
        });
    });
};

export default Interface;
