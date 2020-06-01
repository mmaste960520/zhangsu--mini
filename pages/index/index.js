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
    menus: [
      {
        url: '',
        pic: '../../images/index/menu1.png',
        name: '美食'
      },
      {
        url: '',
        pic: '../../images/index/menu2.png',
        name: '美容美发'
      },
      {
        url: '',
        pic: '../../images/index/menu3.png',
        name: '休闲娱乐'
      },
      {
        url: '',
        pic: '../../images/index/menu4.png',
        name: '电影'
      },
      {
        url: '',
        pic: '../../images/index/menu5.png',
        name: '打车'
      },
      {
        url: '',
        pic: '../../images/index/menu6.png',
        name: '水果'
      },

      {
        url: '',
        pic: '../../images/index/menu7.png',
        name: '酒店住宿'
      },
      {
        url: '',
        pic: '../../images/index/menu8.png',
        name: '民宿/公寓'
      },
      {
        url: '',
        pic: '../../images/index/menu9.png',
        name: '游泳/健身'
      },
      {
        url: '/pages/more_classify/index',
        pic: '../../images/index/menu10.png',
        name: '更多'
      }
    ],
    imgUrls: [
      {
        adv_code: '../../images/banner1.png'
      },
      {
        adv_code: '../../images/banner1.png'
      }
    ],
    couponList: [
      {
        url: '/pages/couponDetails/index',
        coupon_title: '20',
        coupon_sub: '满199元可使用',
        image: '../../images/goodImg1.png',
        title: '自然之名洋甘菊面膜女20贴舒缓修护敏感肌肤补水毛孔',
        store_title: '自然之名美妆店',
        distance: '852m',
        vip_price: '',
        price: '',
        line_price: ''
      },
      {
        url: '/pages/couponDetails/tuanGouDetails/index',
        coupon_title: '团购券',
        coupon_sub: '',
        image: '../../images/goodImg2.png',
        title: '春夏京都玉露补水套装张艺兴补水乳液屈臣氏洁面护肤品男女学生',
        store_title: '春夏系列美妆店',
        distance: '756m',
        vip_price: '222',
        price: '227',
        line_price: '427'
      },
      {
        url: '/pages/couponDetails/index',
        coupon_title: '8折',
        coupon_sub: '部分指定商品可用',
        image: '../../images/goodImg1.png',
        title: '自然之名洋甘菊面膜女20贴舒缓修护敏感肌肤补水保湿紧致收缩毛孔',
        store_title: '自然之名美妆店',
        distance: '852m',
        vip_price: '',
        price: '',
        line_price: ''
      },
      {
        url: '/pages/couponDetails/index',
        coupon_title: '赠品券',
        coupon_sub: '',
        image: '../../images/goodImg2.png',
        title: '赠送一份特色小吃赠送一份特色小吃赠送一份特色小吃',
        store_title: '春夏系列美妆店',
        distance: '756m',
        vip_price: '',
        price: '',
        line_price: ''
      },
      {
        url: '/pages/couponDetails/index',
        coupon_title: '50',
        coupon_sub: '100元代金券',
        image: '../../images/goodImg1.png',
        title: '自然之名洋甘菊面膜女20贴舒缓修护敏感肌肤补水保湿紧致收缩毛孔',
        store_title: '自然之名美妆店',
        distance: '852m',
        vip_price: '181',
        price: '231',
        line_price: ''
      },
      {
        url: '/pages/couponDetails/index',
        coupon_title: '赠品券',
        coupon_sub: '',
        image: '../../images/goodImg2.png',
        title: '赠送一份特色小吃赠送一份特色小吃赠送一份特色小吃',
        store_title: '春夏系列美妆店',
        distance: '756m',
        vip_price: '',
        price: '',
        line_price: ''
      }
    ],
  },
  catchTouchMove: function (res) {
    return false
  },
  /**
   * 跳转优惠券详情
   */
  goCouponDetails: function (url) {
    console.log(url);
    // wx.navigateTo({
    //   url: '/pages/card/openVip/openVip',
    // })
  },
  // 搜索
  goSearch() {
    wx: wx.navigateTo({
      url: '/pages/coupon_search/index'
    })
  },
  // 选择城市
  goSelectCity() {
    wx: wx.navigateTo({
      url: '/pages/index/select_city/index'
    })
  },
  // 商家入驻
  goDealer() {
    wx: wx.navigateTo({
      url: '/pages/inviteDealer/dealer/index'
    })
  },
  // 邀请商家
  goInviteDealer() {
    wx: wx.navigateTo({
      url: '/pages/inviteDealer/index'
    })
  },
  // 加入会员
  goJoinMember() {
    wx: wx.navigateTo({
      url: '/pages/joinMember/index'
    })
  },
  // 拨打电话
  call() {
    wx.makePhoneCall({
      phoneNumber: '029-88888888',
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