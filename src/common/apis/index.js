import request from '../requests'

let publicurl = 'http://localhost:8080'

/**
 * @msg: 获取首页数据
 * @param {type} 
 * @return: 
 */
export function getPageJson(data) {
  return request.request({
    url: `${publicurl}/pageList.json`,
    method: 'GET',
    data,
  })
}