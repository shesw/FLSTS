// pages/choose/choose.js
const app = getApp();
import request from '../../utils/request.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,
    albumInfos:[]
  },

  playAll(){
    console.log('play all')
    wx.showToast({
      title:"这个按钮只是给你看看的" ,
      icon:"none"
    })
  },


  tapp1(){
    this.setData({
      current:0,
      albumInfo: this.data.albumInfos[0]
    })
  },
  tapp2(){
    this.setData({
      current: 1,
      albumInfo: this.data.albumInfos[1]
    })
    
  },
  change(e){
    this.setData({
      current:e.detail.current,
      albumInfo: this.data.albumInfos[e.detail.current]
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onReady: function (options) {
    wx.showLoading({
      title: '加载中',
      icon: 'none',
      mask: true,
    })
    var flag = false;
    if (app.albumInfos.length) {
      this.setData({
        albumInfos: app.albumInfos,
        albumInfo: app.albumInfos[0]
      })
    } else {
      var that = this;
      request.get("albumInfoServlet", { albumId: "ssw" }).then((res) => {
        app.albumInfos[0] = res;
        that.setData({
          albumInfo: res,
        })
        if (flag) {
          wx.hideLoading();
        } else {
          flag = true;
        }
      })
      request.get("albumInfoServlet", { albumId: "fzl" }).then((res) => {
        app.albumInfos[1] = res;
        that.setData({
          albumInfos: app.albumInfos,
        })
        if (flag) {
          wx.hideLoading();
        } else {
          flag = true;
        }
      })
    }
  },

})