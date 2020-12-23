/**
 * author: xuefengji
 * describe: 从订单结算页到支付页
 */
const address = require('../api/address')
const getAddress = require('../api/getAddress')
const ranNum = require('../utils/getRandomNum')
async function orderPay(miniProgram){
    const orderPage = await miniProgram.currentPage()
    console.log(orderPage.path)
    await orderPage.waitFor(3000)
    try{
        const noAddress = await orderPage.$('.no-address')
        
        //判断是否有默认地址
        if(noAddress){
            await getAddress()
            await noAddress.tap()
            await orderPage.waitFor(30000)
            const selectAddress = await miniProgram.currentPage()
            console.log(selectAddress.path)
            const addDetail = await selectAddress.$$('.add-detail-top')
            console.log(await addDetail.length)
            await addDetail[ranNum(addDetail.length)].tap()
            await selectAddress.waitFor(3000)
        }

        const dateTime = await orderPage.$$('.opera-item')
        console.log(await dateTime)
        await dateTime[1].tap()
        await orderPage.waitFor(300) 
        //判断是否有库存
        if(await orderPage.$('.date-item')){
            const dateSelect = await orderPage.$$('.date-item')
            await dateSelect[ranNum(dateSelect.length)].tap()
            await orderPage.waitFor(300)
            const payButton = await orderPage.$('.pay-button')
            await payButton.tap()
            await orderPage.waitFor(3000)
        }else{
            console.log('该商品当前无库存')
        }
    }catch(e){
        console.log(e)
    }
    

 }


 module.exports = orderPay