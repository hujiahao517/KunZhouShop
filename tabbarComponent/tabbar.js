// tabBarComponent/tabBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#000000",
        "color": "#979795",
        "selectedColor": "#F9521F",
        "list": [
          {
            "pagePath": "/pages/view/home/home",
            "iconPath": "/pages/assets/img/tabImg/home.png",
            "selectedIconPath": "/pages/assets/img/tabImg/homeSelect.png",
            "text": "首页"
          },
          {
            "pagePath": "pages/view/category/category",
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
            "pagePath": "pages/view/message/message",
            "text": "消息",
            "iconPath": "/pages/assets/img/tabImg/message.png",
            "selectedIconPath": "/pages/assets/img/tabImg/message_select.png"
          },
          {
            "pagePath": "pages/view/profile/profile",
            "text": "我的",
            "iconPath": "/pages/assets/img/tabImg/profile.png",
            "selectedIconPath": "/pages/assets/img/tabImg/profile_select.png"
          }
        ]
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // isIphoneX: app.globalData.systemInfo.model.search('iPhone X') != -1 ? true : false
    isIphoneX:app.globalData.systemInfo.model.includes("iPhone X")
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
