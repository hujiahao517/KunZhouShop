// pages/common/backstage/backstage.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: Number,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 厂家
    factory_backstage: [{
      img: "/pages/assets/img/factoryImg/tianjia.png",
      text: "添加商品",
      path:"/pages/view/Tools_and_Services/backstages/Addshop/Addshop?type=1"
    }, {
      img: "/pages/assets/img/factoryImg/shangjia.png",
      text: "上架管理",
      path:"/pages/view/Tools_and_Services/backstages/Put_on/Put_on?type=1"
    }, {
      img: "/pages/assets/img/factoryImg/qudao.png",
      text: "渠道管理",
      path:'/pages/view/Tools_and_Services/backstages/channel_management/channel_management?type=1'
    }, {
      img: "/pages/assets/img/factoryImg/wode.png",
      text: "我的账户"
    }]
  },

  observers: { //监听数据的更改
    "type"(data) {
      data == this.data.type //这里不要写this.setData({})
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
     // 点击跳转
     click_navigateTo: function (data) {
      var path = data.currentTarget.dataset.itme.path
        this.triggerEvent('index', {"path":path})//triggerEvent广播数据 index为广播事件
    }
  }
})
