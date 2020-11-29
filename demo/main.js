const automator = require('miniprogram-automator')

automator.launch({
    cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat', // 工具 cli 位置，如果你没有更改过默认安装位置，可以忽略此项
    projectPath: 'E:\\work\\simlove-wechat-mini', // 项目文件地址
    timeout: 50000
}).then(async miniProgram => {
  // const page = await miniProgram.reLaunch('/pages/index/index')
  const page = await miniProgram.currentPage();
  console.log(await page.path);
  if(await page.path === 'pages/index/index'){
    
    await page.waitFor('#indexPage');
    console.log(1);
    try{
      const element = await page.$$('.activity-card')[0];
      console.log(element)
      const elem = await element.$('.top-img');
      await elem.tap();
      // console.log(await element.length)
      // console.log(await element.attribute('class'))
      // const elem = await element[0]
      // console.log(elem)
      // await elem.tap()
    }
    catch(e){
      console.log(e.message);
    }
  
  }
 

  // await miniProgram.close()
})