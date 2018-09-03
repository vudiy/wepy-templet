import wepy from 'wepy'
import { key } from '../common/config'
export default class cacheMixin extends wepy.mixin {
  putCityInfo(data, success, fail) {
    wepy.setStorage({ key: key.CACHE_CITY_INFO, data: data, success, fail })
  }

  getCityInfo() {
    return wepy.getStorageSync(key.CACHE_CITY_INFO)
  }

  getCacheTags() {
    return wepy.getStorageSync(key.CACHE_CITY_TAGS)
  }

  putCacheTags(data, success, fail) {
    wepy.setStorage({
      key: key.CACHE_CITY_TAGS,
      data: data,
      success: success,
      fail: fail
    })
  }

  putCacheSchools(data, success, fail) {
    wepy.setStorage({
      key: key.CACHE_COLLECTION_SCHOOLS,
      data: data,
      success: success,
      fail: fail
    })
  }

  getCacheSchools() {
    return wepy.getStorageSync(key.CACHE_COLLECTION_SCHOOLS)
  }

  getCacheAppoints() {
    return wepy.getStorageSync(key.CACHE_COLLECTION_APPOINTS)
  }

  putCacheAppoints(data, success, fail) {
    wepy.setStorage({
      key: key.CACHE_COLLECTION_APPOINTS,
      data: data,
      success: success,
      fail: fail
    })
  }
}
