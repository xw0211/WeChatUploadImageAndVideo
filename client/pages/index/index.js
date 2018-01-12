// pages/index/index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var upFiles = require('../../utils/upFiles.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
      
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  // 预览图片
  previewImg: function (e) {
      let imgsrc = e.currentTarget.dataset.presrc;
      let _this = this;
      let arr = _this.data.upImgArr;
      let preArr = [];
      arr.map(function(v,i){
          preArr.push(v.path)
      })
    //   console.log(preArr)
      wx.previewImage({
          current: imgsrc,
          urls: preArr
      })
  },
  // 选择 图片 或上传 视频
  uploadFiles: function (e) {
      var _this = this;
      wx.showActionSheet({
          itemList: ['选择图片', '选择视频'],
          success: function (res) {
            //   console.log(res.tapIndex)
              let xindex = res.tapIndex;
              if (xindex == 0){
                  upFiles.chooseImage(_this, e)
              } else if (xindex == 1){
                  upFiles.chooseVideo(_this, e)
              }
          },
          fail: function (res) {
              console.log(res.errMsg)
          }
      })
  },
  // 提交图片和视频
  subFormData:function(){
      let _this = this;
      let upData = {};
      upData['url'] = config.service.upFiles; // 提交地址
      upFiles.upFilesFun(_this, upData,function(res){
          console.log(res)
      })
  }
})