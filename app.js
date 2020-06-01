// 站点配置文件
import siteinfo from './siteinfo.js';

App({

  /**
   * 全局变量
   */
  globalData: {
    user_id: null,
    userInfo: []
  },

  // api地址
  api_root: siteinfo.siteroot + 'api/',

  /**
   * 生命周期函数--监听小程序初始化
   */
  onLaunch(e) {

  },

  onShow(options) {

  },

  /**
   * 执行用户登录
   */
  doLogin() {
    // 保存当前页面
    let pages = getCurrentPages();
    if (pages.length) {
      let currentPage = pages[pages.length - 1];
      "pages/login/login" != currentPage.route &&
        wx.setStorageSync("currentPage", currentPage);
    }
    // 跳转授权页面
    wx.navigateTo({
      url: "/pages/login/login"
    });
  },

  /**
   * 当前用户id
   */
  getUserId() {
    return wx.getStorageSync('user_id');
  },

  /**
   * 显示成功提示框
   */
  showSuccess(msg, callback) {
    wx.showToast({
      title: msg,
      icon: 'success',
      mask: true,
      duration: 1500,
      success() {
        callback && (setTimeout(function () {
          callback();
        }, 1500));
      }
    });
  },

  /**
   * 显示失败提示框
   */
  showError(msg, callback) {
    wx.showModal({
      title: '友情提示',
      content: msg,
      showCancel: false,
      success(res) {
        callback && callback();
      }
    });
  },

  /**
   * get请求
   */
  _get(url, data, success, fail, complete, check_login) {
    wx.showNavigationBarLoading();
    let _this = this;
    // 构造请求参数
    data = data || {};
    // 构造get请求
    let request = function () {
      data.key = wx.getStorageSync('token');
      wx.request({
        url: _this.api_root + url,
        header: {
          'content-type': 'application/json'
        },
        data: data,
        success(res) {
          if (res.statusCode !== 200 || typeof res.data !== 'object') {
            return false;
          }
          if (res.data.code === 11001) {
            // 登录态失效, 重新登录
            wx.hideNavigationBarLoading();
            _this.doLogin();
          } else if (res.data.code === 10001) {
            _this.showError(res.data.msg, function () {
              fail && fail(res);
            });
            return false;
          } else {
            success && success(res.data);
          }
        },
        fail(res) {
          _this.showError(res.errMsg, function () {
            fail && fail(res);
          });
        },
        complete(res) {
          wx.hideNavigationBarLoading();
          complete && complete(res);
        },
      });
    };
    // 判断是否需要验证登录
    check_login ? _this.doLogin(request) : request();
  },

  /**
   * post提交
   */
  _post_form(url, data, success, fail, complete, isShowNavBarLoading) {
    let _this = this;

    isShowNavBarLoading || true;
    data.key = wx.getStorageSync('token');
    wx.request({
      url: _this.api_root + url,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
      data: data,
      success(res) {
        if (res.statusCode !== 200 || typeof res.data !== 'object') {
          return false;
        }
        if (res.data.code === 11001) {
          // 登录态失效, 重新登录
          wx.hideNavigationBarLoading();
          _this.doLogin();
          return false;
        } else if (res.data.code === 10001) {
          _this.showError(res.data.message, function () {
            fail && fail(res);
          });
          return false;
        }
        success && success(res.data);
      },
      fail(res) {
        _this.showError(res.errMsg, function () {
          fail && fail(res);
        });
      },
      complete(res) {
        wx.hideNavigationBarLoading();
        complete && complete(res);
      }
    });
  },

  /**
   * 验证是否存在user_info
   */
  validateUserInfo() {
    let user_info = wx.getStorageSync('user_info');
    return !!wx.getStorageSync('user_info');
  },

  /**
   * 发起微信支付
   */
  wxPayment(option) {
    console.log(option)
    let options = Object.assign({
      payment: {},
      success: () => { },
      fail: () => { },
      complete: () => { },
    }, option);
    let _this = this;

    wx.requestPayment({
      timeStamp: options.payment.timeStamp,
      nonceStr: options.payment.nonceStr,
      package: options.payment.package,
      signType: options.payment.signType,
      paySign: options.payment.paySign,
      success(res) {
        options.success(res);
      },
      fail(res) {
        options.fail(res);
      },
      complete(res) {
        options.complete(res);
      }
    });
  },
})