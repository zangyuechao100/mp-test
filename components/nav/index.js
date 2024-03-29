// components/nav/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    first: Boolean,
    lastest: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    leftSrc: './images/triangle@left.png',
    rightSrc: './images/triangle@right.png',
    disLeftSrc: './images/triangle.dis@left.png',
    disRightSrc: './images/triangle.dis@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft: function () {
      if (!this.properties.lastest) {
        this.triggerEvent('left', {

        })
      }
    },
    onRight: function () {
      if (!this.properties.first) {
        this.triggerEvent('right', {

        })
      }
    }
  }
})
