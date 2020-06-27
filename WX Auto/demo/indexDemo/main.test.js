const automator = require('miniprogram-automator')

describe('index', () => {
  let miniProgram
  let page

  beforeAll(async () => {
    miniProgram = await automator.launch({
        cliPath: 'E:\\微信web开发者工具\\cli.bat',
        projectPath: 'F:\\simlove-wechat-mini'
    })
    page = await miniProgram.reLaunch('/pages/index/index')
    await page.waitFor(500)
  }, 30000)

  test('测试',()=>{
    expect('hello').toMatch('he');
  })


//   afterAll(async () => {
//     await miniProgram.close()
//   })
})