// pages/card/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '西安市高新区科技二路科技二路科技二路',
    scrollTop: 0,
    indicatorDots: false,
    circular: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    imgUrls: [
      {
        adv_code: '../../../images/banner1.png'
      },
      {
        adv_code: '../../../images/banner1.png'
      }
    ],
    follow:'0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 拨打电话
  call() {
    wx.makePhoneCall({
      phoneNumber: '029-88888888',
    })
  },
  // 店铺详情
  goStoreDetail() {
    wx: wx.navigateTo({
      url: '/pages/shopDetails/index'
    })
  },
  // 关注店铺
  follow() {
    var that = this;
    that.setData({
      follow: 1
    })
  },
  // 要去的地址
  getLocation: function () {
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        wx.openLocation({//​使用微信内置地图查看位置。
          latitude: 34.1952020000,//要去的纬度-地址
          longitude: 108.8891300000,//要去的经度-地址
          name: "高新区科技二路科技二路",
        })
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