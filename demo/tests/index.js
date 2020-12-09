/*
author: xuefengji
describe: 从首页进入单次商品详情页，再从商品详情页进入定单结算页
*/
const getOneProduct = require('../utils/getProduct')
const singleBuy = require('../utils/singleBuy')
const orderPay = require('../utils/orderPay')
async function indexToOrder(miniProgram){
     //获取首页或全部商品页的任意商品
      await getOneProduct(miniProgram)
      //从商品详情页进入订单结算页
      await singleBuy(miniProgram)
      //进入支付页
      orderPay(miniProgram)
      
}
module.exports = indexToOrder

