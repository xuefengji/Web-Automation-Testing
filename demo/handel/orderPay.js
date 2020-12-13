/**
 * author: xuefengji
 * describe: 从订单结算页到支付页
 */
const address = require('../api/address')
const getAddress = require('../api/getAddress')
async function orderPay(miniProgram){
    const orderPage = await miniProgram.currentPage()
    console.log(orderPage.path)
    //判断是否有默认地址
    const noAddress = await orderPage.$('.no-address')
    if(noAddress){
        await getAddress()
        await noAddress.tap()
    }
    await orderPage.waitFor(3000)
    const selectAddress = miniProgram.currentPage()
    const addDetail = await selectAddress.$$('selectAddress')
    console.log(await addDetail.length)
 }


 module.exports = orderPay