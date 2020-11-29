const automator = require('miniprogram-automator')

describe('index', () => {
  let miniProgram
  let page

  beforeAll(async () => {
    miniProgram = await automator.launch({
      cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat', // 工具 cli 位置，如果你没有更改过默认安装位置，可以忽略此项
      projectPath: 'E:\\work\\simlove-wechat-mini', // 项目文件地址
    })
    page = await miniProgram.reLaunch('/pages/component/index')
    await page.waitFor(500)
  }, 30000)

  afterAll(async () => {
    await miniProgram.close()
  })

  it('index', ()=>{
    
  })
})


