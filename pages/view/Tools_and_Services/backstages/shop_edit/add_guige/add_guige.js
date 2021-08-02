// pages/view/Tools_and_Services/backstages/shop_edit/add_guige/add_guige.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: null, //身份
    guige: [{
      name: "颜色",
      value: ["红", "黄", "绿"]
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  // 点击添加按钮
  add: function (e) {

    this.data.guige[e.currentTarget.dataset.item].value.push("")

    this.setData({
      guige: this.data.guige
    })
  },
  // 点击小的删除按钮
  xiao_cha: function (e) {
    console.log(this.data.guige[e.currentTarget.dataset.indx2].value.splice(e.currentTarget.dataset.item, 1));

    this.setData({
      guige: this.data.guige
    })
  },
  // 点击大的删除按钮
  cha: function (e) {
    this.data.guige.splice(e.currentTarget.dataset.item, 1)
    this.setData({
      guige: this.data.guige
    })
  },
  //点击添加一组
  add_zu: function () {
    let obj = {
      name: "",
      value: [""]
    }
    this.data.guige.push(obj)
    this.setData({
      guige: this.data.guige
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