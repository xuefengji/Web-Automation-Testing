const automator = require('miniprogram-automator')
const opreate = require('./utils/opreate.js')
const {getElement} = opreate

describe('index', () => {
  let miniProgram
  let page
  let element

  beforeAll(async () => {
    miniProgram = await automator.launch({
        // cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
        cliPath: 'E:\\微信web开发者工具\\cli.bat',
        // projectPath: 'E:\\simlove-wechat-mini'
        projectPath: 'F:\\simlove-wechat-mini'
    })
    page = await miniProgram.switchTab('/pages/index/index')
    await page.waitFor(500)
    elements = await getElement(page,'goods-thumb',1)
    // console.log(element.length)
    // console.log(element[0])
    // console.log(page)
  }, 30000)

  test('首页',()=>{
    console.log(page.path)
    expect(page.path).toMatch('pages/index/index');
  })
  
  test('进入商品详情页',async () => {
    const element = await elements[0].$$('')
    console.log(element)
    await element.tap()
    console.log(await miniProgram.currentPage())
  })


//   afterAll(async () => {
//     await miniProgram.close()
//   })
})