import Axios from './../../config/Interface'

/***
 * 获取用户信息列表
 */
export function getClientsData (params) {
  return Axios.API(
    'GET',
    '/export',
    params.params
  )
}

/***
 * 获取用户信息列表
 */
export function searchClientsData (params) {
  return Axios.API(
    'GET',
    '/search',
    params.params
  )
}

/***
 * 增加用户信息
 */
export function addClientsData (params) {
  return Axios.API(
    'POST',
    '/doAdd',
    params.params
  )
}

/***
 * 用户数组信息追加
 */
export function arrAddClientsData (params) {
  return Axios.API(
    'POST',
    '/arrAdd',
    params.params
  )
}

/***
 * 拉取需要编辑的用户信息
 */
export function editClientsData (params) {
  return Axios.API(
    'GET',
    '/edit',
    params.params
  )
}

/***
 * 修改用户信息
 */
export function amendClientsData (params) {
  return Axios.API(
    'POST',
    '/doEdit',
    params.params
  )
}

/***
 * 删除用户信息
 */
export function removeClientsData (params) {
  return Axios.API(
    'GET',
    '/delete',
    params.params
  )
}
