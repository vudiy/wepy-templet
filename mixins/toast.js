import wepy from 'wepy'

export default class toastMixin extends wepy.mixin {
  onLoad() {
    // onLoad生命周期
    // this.showToast()
  }
  noMore() {
    // 普通方法直接定义到class的静态方法
    wepy.showToast({
      // wepy.showToast 等同于 wx.showToast
      title: '没有更多了...',
      icon: 'none',
      duration: 1500
    })
  }
  toast(str) {
    wepy.showToast({
      title: str,
      icon: 'none',
      duration: 2000
    })
  }
  // 错误toast
  errorToast(str) {
    wepy.showToast({
      title: str,
      image: '../public/error.png',
      icon: 'none',
      duration: 2000
    })
  }
  successToast(str) {
    wepy.showToast({
      title: str,
      icon: 'success',
      duration: 2000
    })
  }
  hideToast() {
    wepy.hideToast()
  }
}
