// pages/canvas/canvas.js
// const kooPainter = require('koo-painter')

Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log('onload')
    this.setData({
      palette: {
        width: "700rpx",
        height: "700rpx",
        background: "#eee",
        views: [{
          type: "text",
          text: "adfsaf",
          css: {
            left: "100rpx",
            top: "200rpx",
            fontWeight: "normal"
          },
          animation:{
            drag: true
          }
        }]
      }
    })
  },

  imgOK(e) {
    console.log(e.detail.path)
  }

})