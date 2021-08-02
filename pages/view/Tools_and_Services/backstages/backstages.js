// pages/view/Tools_and_Services/backstages/backstages.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: null, //身份 type:1 厂家
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      type: options.type
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
  // 点击我的订单 通过子组件返回的index 判断点击的第几个订单 
  click_order:function(e){
      wx.navigateTo({
        url: '/pages/view/Tools_and_Services/backstages/My_order/My_order?type='+this.data.type,
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptDataFromOpenedPage: function(data) {
            console.log(data)
          },
        },
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', {data: e.detail.index})
        }
      })
  },
  // 点击返回按钮
  fanhui: function () {
    wx.navigateBack(1)
  },
  // 点击跳转设置
  shezhi: function () {
    let self = this;
    wx.navigateTo({
      url: '/pages/view/Tools_and_Services/backstages/SheZhi/SheZhi?type=' + self.data.type,
    })
  },
  // 点击跳转 厂家后台 的分类
  click_navigateTo (e) {
    wx.navigateTo({
      url: e.detail.path,
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
  //   return
  // }
})