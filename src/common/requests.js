/*
 * @Author: WJK
 * @Date: 2020-03-01 13:21:27
 * @LastEditTime: 2020-03-02 13:10:41
 */
// import { Toast } from 'vant';
class Request {
    constructor(parms) {
        this.withBaseURL = parms.withBaseURL
        this.baseURL = parms.baseURL
    }
    request(parames) {
        let url = parames.url || ''
        let method = parames.method || 'GET'
        let data = parames.data || ''
        this.withBaseURL = (url.indexOf('http') == -1)
        let requestUrl = this.withBaseURL ? this.baseURL + url : url;
        let options = {
            method,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(data)
        }
        if (method == 'GET') {
            delete options.body;
            let qs = '?';
            for (const key in parames.data) {
                qs += key + '=' + parames.data[key] + '&'
            }
            qs = qs.substring(0, qs.length - 1)
            qs.length > 1 ? requestUrl += qs : ''
        }
        return fetch(requestUrl, options)
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                return successFn(res)
            }).catch(function (err) {
                error(err)
            })
            
    }
}
function error(err) {
    console.log(err);
    // Toast({
    //     message: '网络不给力！请稍后再试',
    //     icon: 'none',
    //     duration: 3500
    // })
}
function successFn(data) {
    switch (data.code) {
        case 0:
            return data.data
        default:
            businessError(data.msg)
            break;
    }

}
function businessError(params) {
    console.log(params);
    // Toast({
    //     message: params,
    //     duration: 2000
    // })
}
const request = new Request({
    baseURL: process.env.VUE_APP_API,
    withBaseURL: true
})


export default request
