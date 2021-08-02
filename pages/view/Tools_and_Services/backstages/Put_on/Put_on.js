// pages/view/Tools_and_Services/backstages/Put_on/Put_on.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: null, //用来判断是那个身份跳转过来的 1代表厂家
    currentTab: 1, 
    show: false, // 是否显示弹出层
    actions: [{
      name: '酒品',
    }, {
      name: '新品上市',
    }, {
      name: '现货专区',
    }, {
      name: '配饰专区',
    },
    {
      name: '热卖爆款',
    },
    {
      name:"上装"
    },{
      name:"下装"
    },
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
  // 点击切换 上架中 仓储中
  clickTab: function (e) {
    var that = this;
    if (that.data.currentTab == e.currentTarget.dataset.current) return false;
    that.setData({
      currentTab: e.currentTarget.dataset.current
    })
  },
  // 点击上架中的新品上市 出现弹出层
  onClose() {
    this.setData({
      show: !this.data.show
    });
  },
  // 点击弹出成的选项
  onSelect(event) {
    console.log(event.detail);
  },
  // 点击仓储中的编辑 跳转到 商品编辑页
  click_shop_edit:function(){
    wx.navigateTo({
      url: '/pages/view/Tools_and_Services/backstages/shop_edit/shop_edit?type='+this.data.type,
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data:"1" })
      }
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