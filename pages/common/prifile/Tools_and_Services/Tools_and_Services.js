// pages/common/prifile/Tools_and_Services/Tools_and_Services.js
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
    Tools_and_Services: [{
        img: "/pages/assets/img/profile/jifen.png",
        text: "积分区"
      },
      {
        img: "/pages/assets/img/profile/lingqian.png",
        text: "零钱区"
      },
      {
        img: "/pages/assets/img/profile/dijia.png",
        text: "低价区"
      },
      {
        img: "/pages/assets/img/profile/wangdian.png",
        text: "网点申请"
      },
      {
        img: "/pages/assets/img/profile/shenqingwangdian.png",
        text: "申请网点"
      },
      {
        img: "/pages/assets/img/profile/changjiashengqing.png",
        text: "厂家申请"
      },
      {
        img: "/pages/assets/img/profile/tuiguangyuan.png",
        text: "推广员申请"
      },
      {
        img: "/pages/assets/img/profile/wangdianhoutai.png",
        text: "网点后台"
      },
      {
        img: "/pages/assets/img/profile/changjiahoutai.png",
        text: "网店后台"
      },
      {
        img: "/pages/assets/img/profile/tuiguangyuan2.png",
        text: "推广员后台"
      },
      {
        img: "/pages/assets/img/profile/wangdian2.png",
        text: "厂家后台",
        path:"/pages/view/Tools_and_Services/backstages/backstages?type=1"
      },
    ],
    Tools_and_Services_factory:[{
      img: "/pages/assets/img/factoryImg/changjiatongji.png",
      text: "厂家统计"
    },{
      img: "/pages/assets/img/factoryImg/tuiguang.png",
      text: "推广网点",
      path:"/pages/view/Tools_and_Services/ToolsServices/popularize_netwrok/popularize_netwrok?type=1"
    },{
      img: "/pages/assets/img/factoryImg/quanbu.png",
      text: "发货汇总"
    },{
      img: "/pages/assets/img/factoryImg/renhe.png",
      text: "人和商城"
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