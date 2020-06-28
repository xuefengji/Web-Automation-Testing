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
    // console.log(page)
  }, 30000)

  test('首页',()=>{
    expect(page.path).toMatch('pages/index/index');
  })
  
  test('进入商品详情页',()=>{
    elements = page.$$('.goods-thumb')
    console.log(elements.length)
  })


//   afterAll(async () => {
//     await miniProgram.close()
//   })
})