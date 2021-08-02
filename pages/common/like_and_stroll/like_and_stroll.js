// pages/common/like_and_stroll/like_and_stroll.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type:{
      type:Number,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  observers:{ //监听数据的更改
    "type"(data){
      data == this.data.type //这里不要写this.setData({})
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
