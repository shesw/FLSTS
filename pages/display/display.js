// pages/display/display.js
import request from '../../utils/request.js';
Page({

  searchKey: "",

  /**
   * 页面的初始数据
   */
  data: {
    pics: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  key(e) {
    this.searchKey = e.detail.value;
  },

  btn() {
    request.get('favorPics', {
      key: this.searchKey
    }).then((res) => {
      console.log(res)
      this.setData({
        pics: res.data,
      })
    })
  },
  preview(e) {
    const that = this;
    wx.previewImage({
      current: that.data.pics[e.currentTarget.dataset.index],
      urls: that.data.pics,
    })
  }

})