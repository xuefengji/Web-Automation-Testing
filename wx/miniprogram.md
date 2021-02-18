# 小程序

## 小程序云函数

+ 开通云函数

+ 添加云函数

  如下图在 cloudfunctions 中添加 sum 函数，添加完成后，并右击部署

  ![1613656523455](../imgs\yunhans.png)

+ 使用云函数

  ```
  在页面的 js 文件中调用云函数，如下：
  sum: function(){
      wx.cloud.callFunction({
        name: "sum",
        data: {
          a: 10,
          b: 20
        }
      })
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
    }
  ```

  