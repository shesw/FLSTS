// components/song-list/song-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    customStyle:String,
    dataSource:Array,
    albumId:String,
    count:Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    choose(e){
      const id = e.currentTarget.dataset.id;
      const albumId = this.properties.albumId;
      wx.navigateTo({
        url: '/pages/play/play?albumId='+albumId+'&id='+id+'&count='+this.properties.count,
      })
    }

  }
})
