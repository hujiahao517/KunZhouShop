// pages/view/Tools_and_Services/ToolsServices/popularize_netwrok/popularize_netwrok.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:null,
    arr: [{
        img: 'http://image.kunzhousc.com/uploads/2021/0723/de2a9cfebb77fd2c2db43e9e4c101a1a.png',
        text: ''
      }, {
        img: 'http://image.kunzhousc.com/uploads/2021/0723/7bc86d735b339e1e3c34cada4a13a0a5.png',
        text: ''
      }, {
        img: 'http://image.kunzhousc.com/uploads/2021/0723/7bc86d735b339e1e3c34cada4a13a0a5.png',
        text: ''
      }, {
        img: 'http://image.kunzhousc.com/uploads/2021/0723/7bc86d735b339e1e3c34cada4a13a0a5.png',
        text: ''
      },
      {
        img: 'http://image.kunzhousc.com/uploads/2021/0723/7bc86d735b339e1e3c34cada4a13a0a5.png',
        text: ''
      },
      {
        img: 'http://image.kunzhousc.com/uploads/2021/0723/7bc86d735b339e1e3c34cada4a13a0a5.png',
        text: ''
      },
      {
        img: 'http://image.kunzhousc.com/uploads/2021/0723/7bc86d735b339e1e3c34cada4a13a0a5.png',
        text: ''
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      type:options.type
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
  // 点击跳转详情
  arrow(){
    wx.navigateTo({
      url: '/pages/view/detail/popularize_netwrok_detail/popularize_netwrok_detail?type='+ this.data.type,
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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
  onShareAppMessage: function () {

  }
})