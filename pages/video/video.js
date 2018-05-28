import request from "../../utils/request.js"
// pages/video/video.js
Page({
  url:'http://sinacloud.net/music-store/iligallthings/akasouma/Akane%20Soma%20-%20YouTube.mp4?KID=sina,2o3w9tlWumQRMwg2TQqi&Expires=1527780157&ssig=5N5i%2BVOM8g',
  /**
   * 页面的初始数据
   */
  data: {
    url:''
  },

  setURL(e){
    console.log(e.detail.value)
  },

  set(){
    request.get('getURL',{input:this.input}).then((res)=>{
      this.setData({
        url: res.url
      })
    },()=>{
      this.setData({
        url:this.url
      })
    }) 
  }

})