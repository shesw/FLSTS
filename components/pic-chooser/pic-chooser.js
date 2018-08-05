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
    picList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    openFile() {
      const that = this;
      wx.chooseImage({
        count: 9,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function (res) {
          if (that.data.picList.length + res.tempFilePaths.length > 9) {
            app.showToast('最多9张');
            return;
          }
          that.data.picList.push(...res.tempFilePaths);
          that.setData({
            picList: that.data.picList
          })
        },
        fail() {
          app.showToast('上传失败')
        }
      })
    },
    preview(e) {
      const that = this
      wx.previewImage({
        current: that.data.picList[e.currentTarget.dataset.index],
        urls: that.data.picList
      })
    },
    del(e) {
      this.data.picList.splice(Number(e.currentTarget.dataset.index), 1);
      this.setData({
        picList: this.data.picList
      })
    },
    getInputInfo(e) {
      this.info = e.detail.value;
    },
    upload() {
      if (this.data.picList.length === 0) {
        app.showToast('请选择图片')
        return;
      }
      const info = this.info ? this.info : new Date().getMilliseconds();
      for (let i = 0; i < this.data.picList.length; i++) {
        const pic = this.data.picList[i];
        wx.uploadFile({
          url: `${app.settings.SERVER_ADDRESS}uploadObj`,
          filePath: pic,
          name: info,
          formData:{
            name: info,
          },
          success: function (res) {
            var data = res.data
            console.log(data)
            //do something
          },
          fail(e) {
            console.log(e)
          }
        })
      }
    }
  }
})