import request from '../utils/request'

export const getSiteInfo = () => {
  return request({
    url: 'http://127.0.0.1:3000/api/siteInfo.json',
    method: 'get'
  })
}
