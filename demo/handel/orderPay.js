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
    //判断是否有默认地址
    const noAddress = await orderPage.$('.no-address')
    if(noAddress){
        await getAddress()
        await noAddress.tap()
        await orderPage.waitFor(30000)
        const selectAddress = await miniProgram.currentPage()
        console.log(selectAddress.path)
        const addDetail = await selectAddress.$$('.add-detail-top')
        console.log(await addDetail.length)
        await addDetail[ranNum(addDetail.length)].tap()
    }
    
    
 }


 module.exports = orderPay