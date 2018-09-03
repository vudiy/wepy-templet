/* ========================================================
                        小程序配置文件
======================================================== */

// 域名
var host = 'http://192.168.1.21:8080/anyierp'
// var host = 'http://192.168.1.212:8088/ecar'
// var host = 'https://www.anyixueche.com'

// 下面的地址
export const service = {
  // 时间段列表
  time: `${host}/api/time/list`,
  // 时间段预约详情
  timeDetail: `${host}/api/time/detail`,
  // 培训记录
  record: `${host}/api/record`,
  // 个人信息
  selfInfo: `${host}/api/manager/info`,
  // 更新密码
  updatePassword: `${host}/api/update/password`,
  // 登录接口
  login: `${host}/api/login/bindUser`,
  // 自动登录验证接口
  autoLogin: `${host}/api/login/getUserInfo`,
  // 登出接口
  logout: `${host}/api/login/logout`,
  // 主域
  host
}

export const key = {
  CACHE_CITIES: 'CACHE_CITIES',
  CACHE_CITY_INFO: 'CACHE_CITY_INFO',
  CACHE_CITY_CODE: 'CACHE_CITY_CODE',
  CACHE_CITY_TAGS: 'CACHE_CITY_TAGS',
  CACHE_COLLECTION_APPOINTS: 'CACHE_COLLECTION_APPOINTS',
  CACHE_COLLECTION_SCHOOLS: 'CACHE_COLLECTION_SCHOOLS'
}

export default {
  service,
  key
}
