import request from "../../utils/request.js"
// pages/video/video.js
Page({
  bucketName:'music-store',
  /**
   * 页面的初始数据
   */
  data: {
    url:''
  },

  setBN(e){
    this.bucketName = e.detail.value;
  },

  setPath(e){
    this.path = e.detail.value
  },

  setExpire(e){
    this.expire = e.detail.value
  },

  set(){
    console.log(this.bucketName)
    console.log(this.path)
    console.log(this.expire)
    const para = {
      bucketName: this.bucketName,
      path: this.path,
      minutes: this.expire,
    }
    request.get('generurl',para).then((res)=>{
      console.log(res)
      this.setData({
        url:res
      })
    })
  }

})