import request from "@/request/index";


//GET请求示例
export function GetRequest(query) {
    return request({
        url: '/master/list',
        method: 'get',
        params: query
    })
}

//POST请求示例
export function PostRequest(data) {
    return request({
        url: '/master/list',
        method: 'post',
        data: data
    })
}

