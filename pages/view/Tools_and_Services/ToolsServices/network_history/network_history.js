// pages/view/Tools_and_Services/ToolsServices/network_history/network_history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:null,
    arr:[
      {
        img:'http://image.kunzhousc.com/uploads/2021/0723/de2a9cfebb77fd2c2db43e9e4c101a1a.png',
        text:'免水洗发干发喷雾天然植物成分头发去油干发剂蓬蓬粉蓬松粉',
        number:'99',
        status:'已下架'
      },
      {
        img:'http://image.kunzhousc.com/uploads/2021/0723/de2a9cfebb77fd2c2db43e9e4c101a1a.png',
        text:'免水洗发干发喷雾天然植物成分头发去油干发剂蓬蓬粉蓬松粉',
        number:'99',
        status:'已下架'
      },
      {
        img:'http://image.kunzhousc.com/uploads/2021/0723/de2a9cfebb77fd2c2db43e9e4c101a1a.png',
        text:'免水洗发干发喷雾天然植物成分头发去油干发剂蓬蓬粉蓬松粉',
        number:'99',
        status:'已下架'
      },
      {
        img:'http://image.kunzhousc.com/uploads/2021/0723/de2a9cfebb77fd2c2db43e9e4c101a1a.png',
        text:'免水洗发干发喷雾天然植物成分头发去油干发剂蓬蓬粉蓬松粉',
        number:'99',
        status:'已下架'
      }
    ],
    //默认列表不展开
    arrow: true
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
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
  //点击箭头展列表内容
  arrow() {
    this.setData({
      arrow: !this.data.arrow
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