// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  video() {
    wx.navigateTo({
      url: '/pages/video/video',
    })
  },

  uploadPic() {
    wx.navigateTo({
      url: '/pages/uploadPic/uploadPic',
    })
  },

  display() {
    wx.navigateTo({
      url: '/pages/display/display',
    })
  },

  canvas() {
    wx.navigateTo({
      url: '/pages/canvas/canvas',
    })
  }

})