const automator = require('miniprogram-automator');

const miniProgram = automator.connect({
  wsEndpoint: 'ws://localhost:15540'
}).then(async miniProgram => {
  // 从首页重启
  const page = await miniProgram.reLaunch('/pages/index/index');
  await page.setData({})
  // // 从页面获取bottom-button组件
  // const button = await page.$('bottom-button');
  // // 打印出button的wxml信息
  // console.log(await button.wxml());
})