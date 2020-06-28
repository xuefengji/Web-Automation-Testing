const automator = require('miniprogram-automator');
//连接开发者工具，之前需要使用cli --auto E:\simlove-wechat-mini --auto-port 9420 开启端口
// automator.connect({
//     wsEndpoint: 'ws://localhost:52490'
//   }).then(async miniProgram => {
//     const page = await miniProgram.navigateTo('/pages/index/index')
//     await page.setData({})
//   })
//连接并启动开发者工具
automator.launch({
    cliPath: 'E:\\微信web开发者工具\\cli.bat',
    projectPath: 'F:\\simlove-wechat-mini'
  }).then(async miniProgram => {
    const page = await miniProgram.navigateTo('/pages/index/index')
    await page.setData({})
  })

//获取小程序堆栈页面和跳转 tabBar 页面
// automator.launch({
//   cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
//   projectPath: 'E:\\simlove-wechat-mini'
// }).then(async miniProgram=>{
//   const page = await miniProgram.switchTab("/pages/userCenter/index");
//   // console.log(page.path);
//   const pageStack = await miniProgram.pageStack();
//   console.log(pageStack.length);// 当前页面栈数量
// })

//跳转非 tabBar 页面
// automator.launch({
//   cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
//   projectPath: 'E:\\simlove-wechat-mini'
// }).then(async miniProgram=>{
//   const page = await miniProgram.navigateTo('/pages/goodsPage/goodsPresellDetail/index?id=3');
//   console.log(page.path);
//   const pageStack = await miniProgram.pageStack();
//   console.log(pageStack.length);// 当前页面栈数量
// })

//关闭当前页面，跳转至应用内的某个应用
// automator.launch({
//   cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
//   projectPath: 'E:\\simlove-wechat-mini'
// }).then(async miniProgram=>{
//   const page = await miniProgram.redirectTo('/pages/goodsPage/goodsPresellDetail/index?id=3');
//   console.log(page.path);
//   const pageStack = await miniProgram.pageStack();
//   console.log(pageStack.length);// 当前页面栈数量
// })

//关闭当前页面，返回上一页页面或多级页面
// automator.launch({
//   cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
//   projectPath: 'E:\\simlove-wechat-mini'
// }).then(async miniProgram=>{
//   const page = await miniProgram.navigateTo('/pages/goodsPage/goodsPresellDetail/index?id=3');
//   console.log(page.path);
//   const pageBack = await miniProgram.navigateBack();
//   console.log(pageBack.path);
//   const pageStack = await miniProgram.pageStack();
//   console.log(pageStack.length);// 当前页面栈数量
// })

//关闭所有页面，打开应用内的页面
// automator.launch({
//   cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
//   projectPath: 'E:\\simlove-wechat-mini'
// }).then(async miniProgram=>{
//   const page = await miniProgram.reLaunch('/pages/goodsPage/goodsPresellDetail/index?id=3');
//   console.log(page.path);
//   const pageStack = await miniProgram.pageStack();
//   console.log(pageStack.length);// 当前页面栈数量
// })

//获取当前页面
// automator.launch({
//   cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
//   projectPath: 'E:\\simlove-wechat-mini'
// }).then(async miniProgram=>{
//   const page = await miniProgram.currentPage();
//   console.log(page.path);
//   const pageStack = await miniProgram.pageStack();
//   console.log(pageStack.length);// 当前页面栈数量
// })

//获取系统信息
// automator.launch({
//   cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
//   projectPath: 'E:\\simlove-wechat-mini'
// }).then(async miniProgram => {
//   const systemInfo = await miniProgram.systemInfo();
//   console.log(systemInfo);
//   if (systemInfo.platform === 'devtools') {
//     // Do something
//   }
// })



//开启真机调试
// automator.launch({
//   cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
//   projectPath: 'E:\\simlove-wechat-mini'
// }).then(async miniProgram => {
//   await miniProgram.remote(true);
// })


//断开与小程序的连接
// automator.launch({
//   cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
//   projectPath: 'E:\\simlove-wechat-mini'
// }).then(async miniProgram => {
//   await miniProgram.disconnect();
// })

