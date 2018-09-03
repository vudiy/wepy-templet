import wepy from 'wepy'
import service from '../common/config'
export default class userMixin extends wepy.mixin {
  /* ============= 工具方法（mixins没法复写，就再写一遍了） ============= */
  isFunction(item) {
    return typeof item === 'function'
  }

  validUserInfo(item) {
    if (item === null || item === '') return false
    if (typeof item === 'object') {
      for (var key in item) {
        return true
      }
      return false
    }
    return true
  }

  /* ========================== 用户方法 ========================== */
  // 获取用户信息
  $getUserInfo(callback) {
    // 顶级容错
    if (!this.$parent || !this.$parent.$updateGlobalData) return
    // 取缓存信息
    const user = this.$parent.$updateGlobalData('userInfo')
    // 不重复获取用户信息
    if (user && user.nickName) {
      this.isFunction(callback) && callback(user)
      this.$apply()
      return user
    }
    // 首次获取用户信息
    this.$login(() => {
      // 再获取用户信息
      this._wxUserInfo(callback)
    })
  }

  // 进行微信登陆
  $login(success = () => {}, autoLogin) {
    // 先登录
    wepy.login({
      success: res => {
        console.log('wepy.login.success:', res)

        // 如果不需要自动登录，就return
        if (!autoLogin) {
          // 串行回调
          this.isFunction(success) && success(res)
          this.$apply()
          return
        }

        // 根据业务接口处理:业务登陆:异步
        this.$post(
          { url: service.login, data: { code: res.code } },
          {
            success: ({ code, data }) => {},
            fail: ({ code, data }) => {}
          }
        )
      },
      fail: res => {
        console.log('wepy.login.fail:', res)
      }
    })
  }

  /* ========================= 其他方法 ========================= */
  // 获取用户公开信息（微信）
  _wxUserInfo(success, fail) {
    let { userInfo } = this.$parent.globalData
    if (this.validUserInfo(userInfo)) return

    wepy.getUserInfo({
      success: res => {
        // console.log('wepy.getUserInfo.success:', res)
        // 缓存用户信息
        const user = this.$parent.$updateGlobalData('userInfo', res.userInfo)
        this.isFunction(success) && success(user)
        this.$apply()
      },
      fail: res => {
        console.log('wepy.getUserInfo.fail:', res)
        // 串行回调
        this.isFunction(fail) && fail()
        // this.$apply()
      }
    })
  }

  // 提示用户开启授权
  _wxAuthModal(confirm, cancel) {
    // 先判断是否支持开启授权页的API
    wepy.openSetting &&
      wepy.showModal({
        title: '授权提示',
        content:
          '安易学车希望获得以下权限：\r\n · 获取您的公开信息（昵称、头像等）',
        confirmText: '去授权',
        cancelText: '先不授权',
        success: res => {
          if (res.confirm) {
            console.log('_wxAuthModal.showModal: 用户点击确定', res)
            this.isFunction(confirm) && confirm()
          } else {
            this.isFunction(cancel) && cancel()
          }
        }
      })
  }
}
