/*
author: xuefengji
describe: 从商品详情页进入定单结算页
*/
async function indexToOrder(miniProgram){
 // const page = await mini.reLaunch('/pages/index/index')
 //获取当前页面
  const page = await miniProgram.currentPage();
  console.log(await page.path);
  //判断当前页面是否是首页
  if(await page.path === 'pages/index/index'){
    console.log(1);
    try{
      await page.waitFor('.classify')
      const goodItems = await page.$$('.goods-item');
      console.log(goodItems.length)
      // console.log(elements[0])
      const tapElements = await goodItems[2].$$('view');
      await tapElements[0].tap()
      // console.log(await miniProgram.pageStack())
      // element.tap()
      await page.waitFor(3000)
      const detailpage = await miniProgram.currentPage()
      console.log(detailpage.path)
      //判断是否有授权地址
      await detailpage.waitFor('.goods-delivery-box')
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
      
      const add2cart = await detailpage.$('.add2cart')
     
      if(await add2cart.text() === '单次购买'){
        await detailpage.waitFor(3000)
        await add2cart.tap()
        await detailpage.waitFor(3000)
     
        const paybtn = await detailpage.$('.cart-index--pay-btn')
        await paybtn.tap()
        await detailpage.waitFor(3000)
        
      }


    }
    catch(e){
      console.log(e.message);
    }
  }
}

module.exports = indexToOrder


  
  
 

  // await miniProgram.close()