// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 隐藏系统tabber
    this.hidetabbar();
    // 获取设备信息
    this.getSystemInfo()

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

  },
  onShow: function () {
    //隐藏系统tabbar
    wx.hideTabBar();
  },
  //自己对wx.hideTabBar的一个封装
  hidetabbar() {
    wx.hideTabBar({
      fail: function () {
        setTimeout(function () { // 做了个延时重试一次，作为保底。
          wx.hideTabBar()
        }, 500)
      }
    });
  },
  getSystemInfo: function () {
    let t = this;
    wx.getSystemInfo({
      success: function (res) {
        t.globalData.systemInfo = res;
      }
    });
  },
  editTabbar: function () {
    let tabbar = this.globalData.tabBar;
    let currentPages = getCurrentPages();
    let _this = currentPages[currentPages.length - 1];
    let pagePath = _this.route;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (let i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },
  globalData: {
    userInfo: null,
    systemInfo: null, //客户端设备信息
    tabBar: {
      "backgroundColor": "#ffffff",
      "color": "#979795",
      "selectedColor": "#F9521F",
      "list": [{
          "pagePath": "/pages/view/home/home",
          "text": "首页",
          "iconPath": "/pages/assets/img/tabImg/home.png",
          "selectedIconPath": "/pages/assets/img/tabImg/homeSelect.png"
        },
        {
          "pagePath": "/pages/view/category/category",
          "text": "分类",
          "iconPath": "/pages/assets/img/tabImg/category.png",
          "selectedIconPath": "/pages/assets/img/tabImg/category_select.png"
        },
        {
          "pagePath": "/pages/view/profile/profile",
          "iconPath": "/pages/assets/img/tabImg/voice.png",
          "isSpecial": true,
          "text": "语音"
        },
        {
          "pagePath": "/pages/view/message/message",
          "text": "消息",
          "iconPath": "/pages/assets/img/tabImg/message.png",
          "selectedIconPath": "/pages/assets/img/tabImg/message_select.png"
        },
        {
          "pagePath": "/pages/view/profile/profile",
          "text": "我的",
          "iconPath": "/pages/assets/img/tabImg/profile.png",
          "selectedIconPath": "/pages/assets/img/tabImg/profile_select.png"
        }
      ]
    }

  },
  obj: [{
      title: "首页",
      path: "/pages/view/home/home"
    },
    {
      title: "分类",
      path: "/pages/view/category/category"
    },
    {
      title: "消息",
      path: "/pages/view/message/message"
    },
    {
      title: "我的",
      path: "/pages/view/profile/profile"
    },
    {
      title: "注册",
      path: '/pages/view/logo/logo'
    },
    {
      title: "厂家后台",
      path: '/pages/view/Tools_and_Services/backstages/backstages?type=1'
    },
    {
      title:"厂家设置",
      path:'/pages/view/Tools_and_Services/backstages/SheZhi/SheZhi?type=1'
    },
    {
      title:"厂家信息",
      path:'/pages/view/Tools_and_Services/backstages/factory_information/factory_information?type=1'
    },
    {
      title:"厂家添加子账户",
      path:'/pages/view/Tools_and_Services/backstages/Addaccount/Addaccount?type=1'
    },
    {
      title:"厂家查看子账户",
      path:'/pages/view/Tools_and_Services/backstages/Addaccount/Add_son_account/Add_son_account?type=1'
    },
    {
      title:"厂家添加银行卡",
      path:'/pages/view/Tools_and_Services/backstages/addBackcard/addBackcard?type=1'
    },
    {
      title:"厂家绑定微信",
      path:'/pages/view/Tools_and_Services/backstages/bindingWX/bindingWX?type=1'
    },
    {
      title:'厂家我的订单',
      path:'/pages/view/Tools_and_Services/backstages/My_order/My_order?type=1'
    },
    {
      title:'厂家添加商品',
      path:'/pages/view/Tools_and_Services/backstages/Addshop/Addshop?type=1'
    },
    {
      title:'厂家上架管理',
      path:'/pages/view/Tools_and_Services/backstages/Put_on/Put_on?type=1'
    },
    {
      title:'厂家商品编辑',
      path:'/pages/view/Tools_and_Services/backstages/shop_edit/shop_edit?type=1'
    },
    {
      title:'厂家订单详情',
      path:'/pages/view/detail/order_detail/order_detail?type=1'
    },
    {
      title:'厂家推广网点',
      path:'/pages/view/Tools_and_Services/ToolsServices/popularize_netwrok/popularize_netwrok?type=1'
    },
    {
      title:'厂家推广网点详情页',
      path:'/pages/view/detail/popularize_netwrok_detail/popularize_netwrok_detail?type=1'
    },
    {
      title:'厂家推广网点记录页',
      path:'/pages/view/Tools_and_Services/ToolsServices/network_history/network_history?type=1'
    },
    {
      title:'厂家添加商品',
      path:'/pages/view/Tools_and_Services/backstages/Addshop/add_shop_list/add_shop_list?type=1'
    },
    {
      title:'厂家渠道管理',
      path:'/pages/view/Tools_and_Services/backstages/channel_management/channel_management?type=1'
    },
    {
      title:'厂家添加规格',
      path:'/pages/view/Tools_and_Services/backstages/shop_edit/add_guige/add_guige?type=1'
    },
    
    
  ]

})