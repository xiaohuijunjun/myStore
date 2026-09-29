import axios from "axios";
axios.defaults.baseURL = 'http://activitytest.hpl001.cn/crm_api/app/sinceOrder/' //测试

//post请求头
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded;charset=UTF-8";
//设置超时
axios.defaults.timeout = 10000;

axios.interceptors.request.use(
    config => {
        // Toast.loading({
        //     duration: 0,
        //     message: '加载中...',
        //     forbidClick: true,
        // });
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        // Toast.clear();
        // return response;
    },
    error => {
        // Toast.clear();
        // Dialog.alert({
        //     title: "提示",
        //     message: "网络请求失败，反馈给客服"
        // });
    }
);

export default function axiosApi(type, params, method) {
    let sign = process.env.VUE_APP_SIGN
    if (process.env.NODE_ENV === 'production') {
        sign = localStorage.getItem("wx_sign")
    } else {
        sign = 'crm:user:sign:f0c8cbe468f6a34463d198268290903f'
    }
    var value = {
        sign: sign
    }
    var data = method == "post" ? JSON.stringify(Object.assign(value, params)) : Object.assign(value, params)
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: type,
            data: data
        })
            .then(res => {
                if (res.data.errcode == 0) {
                    resolve(res.data)
                } else {
                    // 接口错误提示
                    // Toast.fail(res.data.msg);
                }
            })
            .catch(err => {
                reject(err)
            });
    })
};