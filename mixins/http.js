import wepy from 'wepy'
export default class httpMixin extends wepy.mixin {
  /**
   * toast.js没法引入，智能这样重写一遍
   *
   * @param {*} str
   * @memberof httpMixin
   */
  toast(str) {
    wepy.showToast({
      title: str,
      icon: 'none',
      duration: 2000
    })
  }

  /* =================== [$get 发起GET请求] =================== */
  $get({ url = '', headers = {}, data = {} }) {
    const methods = 'GET'
    return this.$ajax({ url, headers, methods, data })
  }

  /* =================== [$post 发起POST请求] =================== */
  $post({ url = '', headers = {}, data = {} }) {
    const methods = 'POST'
    return this.$ajax({ url, headers, methods, data })
  }

  /**
   * [ajax 统一请求方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  $ajax({ url = '', headers = {}, methods = 'GET', data = {} }) {
    // 增强体验：加载中
    wepy.showNavigationBarLoading()
    // 构造请求体
    const request = {
      url,
      method: ['GET', 'POST'].indexOf(methods) > -1 ? methods : 'GET',
      header: Object.assign(
        {
          // set something global
        },
        headers
      ),
      data: Object.assign(
        {
          // set something global
        },
        data
      )
    }

    // 控制台调试日志
    // console.table(request)
    // 发起请求
    return wepy.request(request).then(res => {
      console.log(res)
      let { statusCode } = res
      let msg = '网络异常'
      if (statusCode === 200) {
        let data = res.data
        if (data.code === 0) {
          return data.data
        }
        statusCode = data.code
        msg = data.msg
      }
      let err = new Error(msg)
      err.code = statusCode
      throw err
    })
  }
}
