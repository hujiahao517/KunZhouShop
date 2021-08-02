// pages/view/Tools_and_Services/backstages/shop_edit/shop_edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: null, //身份
    fileList: [{
      url: 'http://image.kunzhousc.com/uploads/2021/0723/7bc86d735b339e1e3c34cada4a13a0a5.png',
      name: '图片2',
      isImage: true,
      deletable: true,
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({type:options.type})
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptDataFromOpenerPage', function (data) {
      console.log(data)
    })
  },
  delete: function (e) {
    console.log(e);
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
  // 点击跳转add规格
  add_guige: function () {
    wx.navigateTo({
      url: '/pages/view/Tools_and_Services/backstages/shop_edit/add_guige/add_guige?type='+ this.data.type,
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
  // onShareAppMessage: function () {

  // }
})