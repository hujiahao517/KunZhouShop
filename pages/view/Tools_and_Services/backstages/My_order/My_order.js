// pages/view/Tools_and_Services/factory_backstage/My_order/My_order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:null,//type = 0 为会员 type=1为厂家 
    index:0,// 默认为第一个 是判断 订单的类型
    tab_type1:["今日","待付款","待发货","已发货","已完成","已关闭","退款/售后","全部"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.selectComponent('#tabs').resize();
    console.log(options)
    this.setData({
      type:options.type
    })
    const eventChannel = this.getOpenerEventChannel()
    var self=this;
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log(data)
      self.setData({
        index:data.data
      })
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
  // 切换tab
  onChange:function(event){
    this.setData({
      index:event.detail.name
    })
  },
  // 点击跳转到订单详情 传带参数 type:身份 index 为订单类型
  click_order_detail(){
    wx.navigateTo({
      url: '/pages/view/detail/order_detail/order_detail?type=' +this.data.type+"&index="+this.data.index,
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