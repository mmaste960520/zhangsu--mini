// pages/inviteDealer/dealer/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:'陕西省西安市高新区科技路陕西省西',
    industry:'餐饮业 / 火锅',
    ispopup: true,
    value: [1],
    array: [
      {
        title: '休闲娱乐',
        sub: 'KTV'
      },
      {
        title: '餐饮业',
        sub: '火锅'
      },
      {
        title: '生活服务',
        sub: '电影'
      }
    ],
    doorwayImages: [],
    albumImages: [],
    wxImages: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goContract() {
    wx: wx.navigateTo({
      url: '/pages/inviteDealer/contract/index'
    })
  },
  selectIndustry() {
    var that = this;
    that.setData({
      ispopup: false
    })
  },
  close() {
    var that = this;
    that.setData({
      ispopup: true
    })
  },
  // 选择行业
  booktype(e) {
    this.setData({
      value: e.detail.value,
      industry: this.data.array[e.detail.value].title + "/" + this.data.array[e.detail.value].sub,
    })
  },

  // 店铺门头
  doorwayUploadpic() {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        var doorwayImages = this.data.doorwayImages.concat(res.tempFilePaths)
        // 限制最多只能留下1张照片
        var doorwayImage = doorwayImages.length <= 1 ? doorwayImages : doorwayImages.slice(0, 1)
        console.log(this.data.doorwayImages)
        this.setData({
          doorwayImages: doorwayImage
        })
        console.log(this.data.doorwayImages)
      }
    })
  },
  // 店铺相册
  albumUploadpic() {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        const albumImages = this.data.albumImages.concat(res.tempFilePaths)
        // 限制最多只能留下3张照片
        var albumImage = albumImages.length <= 3 ? albumImages : albumImages.slice(0, 3)
        this.setData({
          albumImages: albumImage
        })
      }
    })
  },


  // 商家微信
  wxUploadpic() {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        const wxImages = this.data.wxImages.concat(res.tempFilePaths)
        // 限制最多只能留下1张照片
        var wxImage = wxImages.length <= 1 ? wxImages : wxImages.slice(0, 1)
        this.setData({
          wxImages: wxImage
        })
      }
    })
  },

// 选择地址
  map: function () {
    var that = this
    wx.chooseLocation({
      success: function (res) {
        // success
        if (res.name == '') {
          that.setData({
            address: '选择位置',
          })
        } else {
          that.setData({
            address: res.name,
          })
        }
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },




  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})