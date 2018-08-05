// components/pic-chooser/pic-chooser.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    picList:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    openFile(){
      const that = this;
      wx.chooseImage({
        count: 9, 
        sizeType: ['original', 'compressed'], 
        sourceType: ['album', 'camera'], 
        success: function (res) {
          that.data.picList.push(...res.tempFilePaths);
          that.setData({
            picList: that.data.picList
          })
        },
        fail(){
          app.showToast('上传失败')
        }
      })
    },
    preview(e){
      const that = this
      wx.previewImage({
        current: that.data.picList[e.currentTarget.dataset.index], 
        urls:  that.data.picList
      })
    },
    del(e){
      this.data.picList.splice(Number(e.currentTarget.dataset.index),1);
      this.setData({
        picList: this.data.picList
      })
    }
  }
})
