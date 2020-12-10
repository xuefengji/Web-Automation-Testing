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
     
 }


 module.exports = orderPay