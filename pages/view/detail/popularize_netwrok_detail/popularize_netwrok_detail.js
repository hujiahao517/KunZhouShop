// pages/view/detail/popularize_netwrok_detail/popularize_netwrok_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[
      {
        img:'http://image.kunzhousc.com/uploads/2021/0723/7bc86d735b339e1e3c34cada4a13a0a5.png',
        text:'免水洗发干发喷雾天然植物成分头发去油干发剂蓬蓬粉蓬松粉',
        number:'99'
      },
      {
        img:'http://image.kunzhousc.com/uploads/2021/0723/7bc86d735b339e1e3c34cada4a13a0a5.png',
        text:'免水洗发干发喷雾天然植物成分头发去油干发剂蓬蓬粉蓬松粉',
        number:'99'

      },
      {
        img:'http://image.kunzhousc.com/uploads/2021/0723/7bc86d735b339e1e3c34cada4a13a0a5.png',
        text:'免水洗发干发喷雾天然植物成分头发去油干发剂蓬蓬粉蓬松粉',
        number:'99'


      },
      {
        img:'http://image.kunzhousc.com/uploads/2021/0723/7bc86d735b339e1e3c34cada4a13a0a5.png',
        text:'免水洗发干发喷雾天然植物成分头发去油干发剂蓬蓬粉蓬松粉',
        number:'99'
      }
    ],
    arrow:true,//  true是下箭头 fasle是上箭头
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
  },
// 点击改变箭头状态
  arrow(){
    this.setData({
      arrow:!this.data.arrow,
    })
   
  },
// 点击查看网点记录
  record(){
    wx.navigateTo({
      url: '/pages/view/Tools_and_Services/ToolsServices/network_history/network_history?',
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
  onShareAppMessage: function () {

  }
})