// pages/play/play.js
import request from '../../utils/request.js';
var player;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    songInfo:{},
    albumId:'',
    count:0,
    currentId:0,
    status:"暂停"
  },

  change(e) {
    this.setData({
      current: e.detail.current,
    })
  },

  previous(){
    var id = this.data.currentId;
    var n = Number(id.substring(1)) - 1;
    var n = n < 1? this.data.count : n;
    var nextId = id.substring(0, 1) + (n > 9 ? n + "" : "0" + n);
    console.log(nextId)
    this.setData({
      currentId: nextId
    })
    player.stop();
    this.setPlay();
  },

  playPause(){
    if(player.paused){
      player.play();
      this.setData({
        status:"暂停"
      })
    }else{
      player.pause();
      this.setData({
        status: "播放"
      })
    }
  },

  next(){
    var id = this.data.currentId;
    var n = Number(id.substring(1))+1;
    var n = n>this.data.count?1:n;
    var nextId = id.substring(0,1) + (n>9?n+"":"0"+n);
    console.log(nextId)
    this.setData({
      currentId: nextId
    })
    player.stop();
    this.setPlay();
  },

  setPlay(){
    var that = this;
    request.get("songInfo",{albumId:this.data.albumId, id:this.data.currentId}).then((res)=>{
      this.setData({
        songInfo:res,
      })
      wx.setNavigationBarTitle({
        title: res.name,
      })
      that.startPlay();
    })
  },

  startPlay(){
    player.src = this.data.songInfo.mp3Path;
    player.play();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(!options.albumId || !options.count || !options.id){
      return;
    }
    this.setData({
      albumId: options.albumId,
      count: options.count,
      currentId: options.id,
    })
    var that = this;
    if(!player){
      player = wx.createInnerAudioContext();
      this.setPlay();
      player.onEnded(function () {
        that.next();
      })
    }else{
      request.get("songInfo", { albumId: this.data.albumId, id: this.data.currentId }).then((res) => {
        this.setData({
          songInfo: res,
        })
        wx.setNavigationBarTitle({
          title: res.name,
        })
        var str1 = player.src;
        var str2 = res.mp3Path;
        if (str1.substring(0, str1.indexOf("?")) !== str2.substring(0, str2.indexOf("?")) ){
          player.stop();
          player.src = res.mp3Path;
          player.play();
        }
      },()=>{
        player.stop();
        wx.showToast({
          title: 'error',
          icon:'none'
        })
      })
    }
  },

})