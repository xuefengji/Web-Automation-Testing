const { TestScheduler } = require('jest')
const automator = require('miniprogram-automator')

test('index',()=>{
  automator.launch({
    cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat', // 工具 cli 位置，如果你没有更改过默认安装位置，可以忽略此项
    projectPath: 'E:\\work\\simlove-wechat-mini', // 项目文件地址
  }).then(async miniProgram => {
    const page = await miniProgram.redirectTo('/pages/goodsPage/goodsLimitDetail/index?id=44&activityType=RESTRITED&activityId=256&presellFlag=true')
    await page.waitFor(async () => {
      return (await miniProgram.pageStack().length) > 0})
    // const pageStacks = await miniProgram.pageStack()
  
   
   
  })
})

