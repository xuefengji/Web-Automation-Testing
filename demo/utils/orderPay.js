/**
 * author: xuefengji
 * describe: 从订单结算页到支付页
 */
const address = require('../api/address')
 async function orderPay(miniProgram){
    const orderPage = await miniProgram.currentPage()
    console.log(orderPage.path)
    //判断是否有默认地址
    const noAddress = await orderPage.$('.no-address')
    if(noAddress){
        address()
    }
 }


 module.exports = orderPay