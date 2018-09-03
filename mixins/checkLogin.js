import wepy from 'wepy'

export default class checkLoginMixin extends wepy.mixin {
  onLoad() {
    // 检测当前是否已经登录
    console.log('checkLogin')
    if (!this.$parent.isLogin()) {
      // 未登录 则直接跳转
      let pages = this.getCurrentPages()
      let page = pages[pages.length - 1]
      let url = page.route
      let options = page.options
      console.log(url, options)
      this.$preload('url', url)
      this.$preload('options', options)
      this.$redirect('/pages/login')
    }
  }
}
