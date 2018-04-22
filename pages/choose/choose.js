// pages/choose/choose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,
    
  },

  playAll(){
    console.log('play all')
  },


  tapp1(){
    this.setData({
      current:0,
    })
  },
  tapp2(){
    this.setData({
      current: 1,
    })
  },
  change(e){
    this.setData({
      current:e.detail.current,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost:70/FLSTSWeb/songsListServlet',
      method:"GET",
      headers:{'Content-Type':'application/json;charset=utf-8'},
      success:function(res){
        console.log(res.data);
        that.setData({
          albumInfo:res.data,
        })
      }
    })


  },


})