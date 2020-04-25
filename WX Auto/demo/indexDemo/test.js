const automator = require('miniprogram-automator');

automator.connect({
  wsEndpoint: 'ws://localhost:55536'
}).then(async miniProgram => {
  const page = await miniProgram.navigateTo('/page/index/index')
  await page.setData({})
})