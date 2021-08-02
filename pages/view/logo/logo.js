// pages/view/logo/logo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: '0', //默认登录状态序号 0：人脸 1：声线 2：微信 3：聚信 4：手机
    // 其他方式登录的图片数据
    Login_mode: [{
        img: '/pages/assets/img/home_img/renlian.png',
        text: '',
        index: 0,
        img2: ""
      },
      {
        img: '/pages/assets/img/home_img/shengxian.png',
        text: '',
        index: 1,
        img2: ""
      },
      {
        img: '/pages/assets/img/home_img/weixin.png',
        text: '微信快速登录',
        index: 2,
        img2: "/pages/assets/img/home_img/weixin2.png"
      },
      {
        img: '/pages/assets/img/home_img/renhe.png',
        text: '聚信快速登录',
        index: 3,
        img2: "/pages/assets/img/home_img/renhe2.png"
      },
      {
        img: '/pages/assets/img/home_img/shouji.png',
        text: '账号密码登录 ',
        index: 4,
        img2: ""
      },
      {
        img: '/pages/assets/img/home_img/duanxin.png',
        text: '短信验证码登录',
        index: 5,
        img2: ""
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  Login_mode: function (data) {
    this.setData({
      status: data.currentTarget.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function (options) {
    wx.navigateBack(3)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage: function () {

  // }
})