//app.js
import request from './utils/request';
import Settings from './utils/settings';

App({ 
  settings:new Settings(), 
  onLaunch: function () {
  },
  albumInfos:[],
  showToast(title){
    wx.showToast({
      title:title,
      icon: 'none'
    })
  }
})