// pages/more_classify/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 当前的分类id
    category_id: 2,
    select:true,
    categoryList: [
      {
        category_id:'0',
        name: '筛选'
      },
      {
        category_id: '1',
        name: '医疗'
      },
      {
        category_id: '2',
        name: '美容美发'
      },
      {
        category_id: '3',
        name: '休闲娱乐'
      },
      {
        category_id: '4',
        name: '电影'
      },
      {
        category_id: '5',
        name: '生活服务'
      },
      {
        category_id: '6',
        name: '美容美发'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onclick(){
    var that = this;
    that.setData({
      select:false,
      category_id:0
    })
  },
  onclickNar(){

  },
  close(){
    var that = this;
    that.setData({
      select: true
    })
  },
  // 团购详情
  goTuanGouDetail() {
    wx: wx.navigateTo({
      url: '/pages/couponDetails/tuanGouDetails/index'
    })
  },
  // 优惠券详情
  goCouponDetail() {
    wx: wx.navigateTo({
      url: '/pages/couponDetails/index'
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