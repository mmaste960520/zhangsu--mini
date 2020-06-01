var $ = require('../../../libs/conf.js');
var city = require('../../../libs/city.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: "",
    _py: ["hot", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"],
    city: '西安',
    cityData: {},
    hotCityData: [],
    showPy: '最近热门',
    //定位/最近访问
    nearbycity: [{
      cityImg: '../../../images/location.png',
      cityName: '西安'
    },
    {
      cityImg: '',
      cityName: '宝鸡'
    },
    {
      cityImg: '',
      cityName: '宝鸡'
    }
    ],
    locateCity: ''
  },

  // 搜索
  goSearch(e) {
    var that = this;
    that.setData({
      searchValue: e.detail.value
    })
  },
  // 取消搜索
  searchBut() {
    var that = this;
    that.setData({
      searchValue: ''
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      historyList: wx.getStorageSync("historyList").length > 0 ? wx.getStorageSync("historyList") : []
    });

    this.setData({
      latitude: wx.getStorageSync("latitude"),
      longitude: wx.getStorageSync("longitude"),
      sname: "我的位置",
      saddress: '西安'
    });

    this.setData({
      cityData: city.all,
      hotCityData: city.hot
    });
  },
  //选择城市
  selectCity: function (e) {
    var dataset = e.currentTarget.dataset;
    this.setData({
      citySelected: dataset.fullname,
      cityListShow: false,
      inputListShow: false,
      historyListShow: true,
      location: {
        latitude: dataset.lat,
        longitude: dataset.lng
      }
    });
  },
  //获取文字信息
  getPy: function (e) {
    console.log(e.target.id)
    this.setData({
      showPy: e.target.id,
    })
  },
  setPy: function (e) {
    console.log(this.data.showPy)
    this.setData({
      scrollTopId: this.data.showPy
    })
  },
  //滑动选择城市
  tMove: function (e) {
    var y = e.touches[0].clientY,
      offsettop = e.currentTarget.offsetTop;

    //判断选择区域,只有在选择区才会生效
    if (y > offsettop) {
      var num = parseInt((y - offsettop) / 12);
      this.setData({
        showPy: this.data._py[num]
      })
    };
  },
  //触发全部开始选择
  tStart: function () {
    this.setData({
      hidden: false
    })
  },

  //触发结束选择
  tEnd: function () {
    this.setData({
      hidden: true,
      scrollTopId: this.data.showPy
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