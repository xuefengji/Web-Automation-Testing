/**
author: xuefengji
describe: 从单次商品详情页进入定单结算页
 */
async function singleBuy(miniProgram){
    // console.log(1)
    const detailpage = await miniProgram.currentPage()
    console.log(detailpage.path)
    //判断是否有授权地址
    await detailpage.waitFor('.goods-delivery-box')
    try{
        const address = await detailpage.$('.bar-index--location-name')
    // console.log(await address.wxml())
    // const addressText = await address.$('.location-name')
    console.log(await address.text())
    if(!await address.text()){
    console.log(2)
    const addressSelect = await detailpage.$('.bar-index--user-location-content')
    console.log(await addressSelect)
    console.log(3)
    await addressSelect.tap()
    await detailpage.waitFor(3000)
    const add = await detailpage.$$('.bar-index--date-item')
    await add[0].tap()
    await detailpage.waitFor(3000)
    
    }
    //加入购物车并点击单次购买按钮
    const add2cart = await detailpage.$('.add2cart')
    
    if(await add2cart.text() === '单次购买'){
    await detailpage.waitFor(3000)
    await add2cart.tap()
    await detailpage.waitFor(3000)
    
    const paybtn = await detailpage.$('.cart-index--pay-btn')
    await paybtn.tap()
    await detailpage.waitFor(3000)
    
    }
    }catch(e){
        console.log('跳转订单结算页失败！')
    }
    
}
    
module.exports = singleBuy