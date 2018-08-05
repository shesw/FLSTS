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
  }

})