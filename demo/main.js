const automator = require('miniprogram-automator')

automator.launch({
    cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat', // 工具 cli 位置，如果你没有更改过默认安装位置，可以忽略此项
    projectPath: 'E:\\work\\simlove-wechat-mini', // 项目文件地址
    timeout: 50000 //设置超时时间，默认为30000
}).then(async miniProgram => {
  // const page = await miniProgram.reLaunch('/pages/index/index')
  //获取当前页面
  let page = await miniProgram.currentPage();
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
      await tapElements[0].tap();
      // console.log(await miniProgram.pageStack())
      // element.tap()
      let detailpage = await miniProgram.currentPage()
      console.log(detailpage.path)
      await detailpage.waitFor('.add2cart')
      const add2cart = await detailpage.$('.add2cart')
      console.log(add2cart)
      console.log(await add2cart.text())
      if(await add2cart.text() === '单次购买'){
        await add2cart.tap()
        await detailpage.waitFor('.pay-btn')
        const pay_btn = await detailpage.$('.pay-btn')
        await pay_btn.tap()
      }


    }
    catch(e){
      console.log(e.message);
    }
  }
 
  
  
 

  // await miniProgram.close()
})