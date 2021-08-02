// pages/common/prifile/my_order/myorder.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 0 代表会员 1代表网点 2 代表厂家
    type: {
      type: Number,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    order_mode: [{
        img: "/pages/assets/img/profile/daifukuan.png",
        text: "待付款",
        number: 1
      },
      {
        img: "/pages/assets/img/profile/daifahuo.png",
        text: "代发货",
        number: 2
      },
      {
        img: "/pages/assets/img/profile/daishouhuo.png",
        text: "待收货",
        number: 2
      },
      {
        img: "/pages/assets/img/profile/yiwancheng.png",
        text: "已完成",
        number: 0
      },
      {
        img: "/pages/assets/img/profile/tuikuan.png",
        text: "退款/售后",
        number: 0
      }
    ],
    order_mode_chanjia: [{
        img: "/pages/assets/img/factoryImg/jinri.png",
        text: "今日",
        number: 0
      },
      {
        img: "/pages/assets/img/factoryImg/daifukuan.png",
        text: "待付款",
        number: 0
      },
      {
        img: "/pages/assets/img/factoryImg/daifahuo.png",
        text: "待发货",
        number: 1
      },
      {
        img: "/pages/assets/img/factoryImg/yifahuo.png",
        text: "已发货",
        number: 1
      },
      {
        img: "/pages/assets/img/factoryImg/yiwancheng.png",
        text: "已完成",
        number: 0
      },
      {
        img: "/pages/assets/img/factoryImg/yiguanbi.png",
        text: "已关闭",
        number: 0
      },
      {
        img: "/pages/assets/img/factoryImg/tuikuan.png",
        text: "退款/售后",
        number: 0
      },
      {
        img: "/pages/assets/img/factoryImg/quanbu.png",
        text: "全部",
        number: 0
      }
    ]
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
    // 点击向父级传参数
    click_order:function(data){
        this.triggerEvent('index', {"index":data.currentTarget.dataset.index})//triggerEvent广播数据 index为广播事件
    },
  }
})