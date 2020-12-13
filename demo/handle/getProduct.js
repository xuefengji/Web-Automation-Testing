/**
 * author: xuefengji
 * describe: 获取单次商品并进入详情页
 */
const ranNum = require('../utils/getRandomNum')
async function getOneProduct(miniProgram){
    const page = await miniProgram.currentPage();
    console.log(await page.path);
  //判断当前页面是否是首页或全部商品页
  if(await page.path === 'pages/index/index' || await page.path === 'pages/allGoods/index'){
    await page.waitFor('.goods-item')
    try{
      const goodItems = await page.$$('.goods-item');
      console.log(goodItems.length)
      // console.log(elements[0])
      //随机获取商品
      // const tapElements = await goodItems[ranNum(goodItems.length)].$$('view');
      // await tapElements[ranNum(tapElements.length)].tap()
      //为方便测试环境测试，使用一个商品
      const tapElements = await goodItems[2].$$('view');
      await tapElements[0].tap()
      // console.log(await miniProgram.pageStack())
      // element.tap()
      await page.waitFor(3000)
      console.log(2)
      
    }catch(e){
      console.log("商品进入详情页失败！")
    }
  }
}

module.exports = getOneProduct