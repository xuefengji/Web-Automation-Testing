const automator = require('miniprogram-automator')

describe('index', () => {
  let miniProgram
  let page
  let element

  beforeAll(async () => {
    miniProgram = await automator.launch({
        cliPath: 'E:\\微信web开发者工具\\cli.bat',
        projectPath: 'F:\\simlove-wechat-mini'
    })
    page = await miniProgram.switchTab('/pages/index/index')
    await page.waitFor(500)
    element = await page.$$('.product')
    // console.log(element.length)
    // console.log(page)
  }, 30000)

  test('首页',()=>{
    console.log(page.path)
    expect(page.path).toMatch('pages/index/index');
  })
  
  test('进入商品详情页',()=>{
    const elements = element[0].$$('.list')
    console.log(elements.length)
  })


//   afterAll(async () => {
//     await miniProgram.close()
//   })
})