# WeChatUploadImageAndVideo
微信小程序上传多张图片以及视频
  
## 在需要上传页面的js中
upFiles.js ------  ./client/utils/upFiles.js

```
var upFiles = require('../../utils/upFiles.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
      
  },

  // 选择 图片 或上传 视频
  uploadFiles: function (e) {
      let _this = this;
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
          // res 返回的当前上传文件的进度 以及 该文件标识
          console.log(res)
      })
  }
})
```
