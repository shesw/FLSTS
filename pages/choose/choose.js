// pages/choose/choose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,
    albumInfo:{
      intro:'这是专辑的简介',
      logoSrc:'http://sinacloud.net/music-store/img/s13.jpg?KID=sina,2o3w9tlWumQRMwg2TQqi&Expires=1546275546&ssig=v9xt1D01ru',
      songList:[],
    },
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
  
  },


})