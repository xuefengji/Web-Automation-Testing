const automator = require('miniprogram-automator');

// automator.connect({
//     wsEndpoint: 'ws://localhost:52490'
//   }).then(async miniProgram => {
//     const page = await miniProgram.navigateTo('/pages/longTermOld/index')
//     await page.setData({})
//   })
automator.launch({
    cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
    projectPath: 'E:\\simlove-wechat-mini'
  }).then(async miniProgram => {
    const page = await miniProgram.navigateTo('/page/index/index')
    await page.setData({})
  })