// pages/view/Tools_and_Services/backstages/SheZhi/SheZhi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:null,//type 为1时 身份为厂家
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  // 厂家信息
  click_factory_info:function(){
    console.log()
    wx.navigateTo({
      url: '/pages/view/Tools_and_Services/backstages/factory_information/factory_information?type='+this.data.type
    })
  },
  // 厂家子账户
  click_addaccount:function(){
    wx.navigateTo({
      url: '/pages/view/Tools_and_Services/backstages/Addaccount/Addaccount?type='+this.data.type
    })
  },
  //添加银行卡
  click_backcard:function(){
    wx.navigateTo({
      url: '/pages/view/Tools_and_Services/backstages/addBackcard/addBackcard?type='+this.data.type,
    })
  },
  // 绑定微信
  click_bindingWX:function(){
    wx.navigateTo({
      url: '/pages/view/Tools_and_Services/backstages/bindingWX/bindingWX?type='+this.data.type,
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