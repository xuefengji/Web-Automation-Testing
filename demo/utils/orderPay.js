/**
 * author: xuefengji
 * describe: 从订单结算页到支付页
 */

 async function orderPay(miniProgram){
    const orderPage = await miniProgram.currentPage()
    console.log(orderPage.path)
    //判断是否有默认地址
    const noAddress = await orderPage.$('.no-address')
    if(noAddress){
        
    }
 }


 module.exports = orderPay