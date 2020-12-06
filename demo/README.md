# miniprogram-automator 

## 1. 安装

使用 npm 进行安装

npm install miniprogram-automator --save

## 2. 使用中遇到的问题

### 2.1 elelment.tap() 使用

在使用 tap()  函数对元素进行点击时，该元素自身必须绑定 bindtap 或 catchtap 时，此元素使用 tap 函数时才会有效



### 2.2 获取自定义组件中的元素

获取购物车组件中的结算按钮： ![1606832462261](E:/myself/project/Automation-Testing/imgs/1.png)

按照 api 上介绍的文档，使用 page.$('.pay-btn')，直接获取元素时，值为 null，既没有获取到

可以先获取 shop-cart，然后查看该组件下

```
        const shoptap = await cartbox.$('shop-cart')
        console.log(await shoptap.wxml())
        
 打印的信息：
 <view class="cart-index--buy-toast"><view class="cart-index--musk-box"></view><view class="cart-index--cart-content"><view class="cart-index--close"><view class="cart-index--line-1"></view><view class="cart-index--line-2"></view></view><view class="cart-index--slogan"><view class="cart-index--title">        购 物  
车      </view></view><view class="cart-index--top-con"><view class="cart-index--slogan-sec" hidden=""><view class="cart-index--iconfont cart-index--icon-warning2" style="color: #54C9E8"></view><view>温馨提示：购物车商品在</view><view class="cart-index--color-txt" style="color: #54C9E8">无锡市</view><view>最快发货 
时间为</view><view class="cart-index--color-txt" style="color: #54C9E8"></view></view><view class="cart-index--slogan-sec cart-index--slogan-sec2" hidden=""><view class="cart-index--iconfont cart-index--icon-warning2" style="color: #54C9E8"></view><view>温馨提示：您选择的          <view class="cart-index--color-txt" style="color: #54C9E8"></view>          在        </view><view class="cart-index--color-txt" style="color: #54C9E8">无锡市</view><view>库存不足,</view><view class="cart-index--txt2">最快发货时间为          <view class="cart-index--color-txt" style="color: #54C9E8"></view><view>建议您分开下单</view></view></view><view class="cart-index--slogan-sec cart-index--slogan-sec2" hidden=""><view class="cart-index--iconfont cart-index--icon-warning2" style="color: #54C9E8"></view><view>温馨提示：购物车商品暂时无货。</view></view></view><view class="cart-index--no-goods"><image class="cart-index--nothing-img" src="https://simlove-ma.oss-cn-shenzhen.aliyuncs.com/miniprogram/newImg/nothing.png" role="img"></image><view class="cart-index--nothing-txt">购物车里什么都没有，快去选购吧~</view></view></view><view hidden=""><address-bar is="custom-components/address-bar/index"><view class="bar-index--other-page"><view class="bar-index--top-content"><view class="bar-index--user-location-content"><view class="bar-index--left"><view class="bar-index--iconfont bar-index--icon-loc" style="color: #54C9E8"></view><text class="bar-index--location-name"></text></view><image class="bar-index--arrow-right" src="https://simlove-ma.oss-cn-shenzhen.aliyuncs.com/miniprogram/newImg/arrow-right@2x.png" role="img"></image></view></view></view></address-bar></view></view>
```

由上面的打印信息可以看出，自定义组件中的每个元素的类名都增加了组件名的前缀，所有获取时应该使用：

```
const paybtn = await detailpage.$('.cart-index--pay-btn')
```

这样就能获取到结算按钮元素了







