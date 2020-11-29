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
    
    if(await page.waitFor('.classify')){
      console.log(1);
      try{
        const elements = await page.$$('.list');
        console.log(await element.length)
        const element = await elements[0].$$('.goods-item')[0]
        // element = await element.$$('.top-img');
        console.log(await element)
        await element.tap();
        
        // console.log(await element.attribute('class'))
        // const elem = await element[0]
        // console.log(elem)
        // await elem.tap()
      }
      catch(e){
        console.log(e.message);
      }
    }
 
  
  }
 

  // await miniProgram.close()
})