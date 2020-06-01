const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 0,
    indicatorDots: false,
    circular: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    imgUrls: [
      {
        adv_code: '../../images/concessbanner.png'
      },
      {
        adv_code: '../../images/concessbanner.png'
      }
    ],
    concessList: [
      {
        storetitle:'海鲜火锅店' ,
        distance:'865',
        img:'../../images/goodImg1.png',
        title:'麻辣烤全羊',
        num:'20',
        progress:'100',
        vipPrice:'20'
      },
      {
        storetitle: '海鲜火锅店',
        distance: '865',
        img: '../../images/goodImg1.png',
        title: '麻辣烤全羊',
        num: '17',
        progress: '80',
        vipPrice: '20'
      },
    ],
    ispopup:true
  },
  catchTouchMove: function (res) {
    return false
  },
  // 优惠券详情
  goCouponDetail() {
    wx: wx.navigateTo({
      url: '/pages/couponDetails/index'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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