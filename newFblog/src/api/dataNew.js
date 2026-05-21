import request from '@/util/require'

export function save(data) {
  return request({
    url: '/api/user/login',
    method: 'post',
    headers: {
      'Content-Type':'application/json'    
    },
    data
  })
}
export function recommend(data) {
  return request({
    url: '/api/bbs/recommend',
    method: 'get',
    headers: {
      'Content-Type':'multipart/form-data' ,
      token:sessionStorage.getItem('token')
    },
    data
  })
}
export function topUser(data) {
  return request({
    url: '/api/bbs/topUser',
    method: 'get',
    headers: {
      'Content-Type':'multipart/form-data' ,
      token:sessionStorage.getItem('token')
    },
    data
  })
}
export function post3(data) {
  return request({
    url: '/api/bbs/post/3',
    method: 'get',
    headers: {
      'Content-Type':'multipart/form-data' ,
      token:sessionStorage.getItem('token')
    },
    data
  })
}
export function comment(data) {
  return request({
    url: '/api/bbs/post/1/comment',
    method: 'get',
    headers: {
      'Content-Type':'multipart/form-data' ,
      token:sessionStorage.getItem('token')
    },
    data
  })
}
export default { save, recommend,topUser,post3}