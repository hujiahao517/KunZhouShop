// pages/view/Tools_and_Services/backstages/Addshop/Addshop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: null, //身份
    //点击
    currentTab: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type:options.type
    })
  },
  //点击切换tab 审核 或者已驳回
  clickTab: function (e) {
    var that = this;
    if (that.data.currentTab == e.currentTarget.dataset.current) return false;
    that.setData({
      currentTab: e.currentTarget.dataset.current
    })
    that.setData({

    })
  },
  //添加跳转
  addshop: function () {
    wx.navigateTo({
      url: '/pages/view/Tools_and_Services/backstages/Addshop/add_shop_list/add_shop_list?type='+this.data.type,
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