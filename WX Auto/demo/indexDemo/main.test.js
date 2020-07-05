const automator = require('miniprogram-automator')
const opreate = require('./utils/opreate.js')
const {getElement} = opreate

describe('index', () => {
  let miniProgram
  let page
  let elements

  beforeAll(async () => {
    miniProgram = await automator.launch({
        cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
        // cliPath: 'E:\\微信web开发者工具\\cli.bat',
        projectPath: 'E:\\simlove-wechat-mini'
        // projectPath: 'F:\\simlove-wechat-mini'
    })
    page = await miniProgram.reLaunch('/pages/index/index');
    await page.waitFor(500);
    // elements = await getElement(page,'goods-thumb',1)
    // console.log(element.length)
    // console.log(element[0])
    // console.log(page)
  }, 300000)

  test('首页', async () => {
    //  elements = await page.$$('.classify')
    elements = await page.$$('.goods-item')
    console.log(elements)
    // clickButton = await elements[0].$('van-stepper-54c9e8')
    //  console.log(elements[0].id)
    // expect(page.path).toMatch('pages/index/index');
  })
  
  test('进入商品详情页', async () => {
   var id = elements[0].id
    page = await miniProgram.navigateTo('/pages/goodsPage/goodsPresellDetail/index?id=' + id);
    page = await miniProgram.currentPage()
    console.log(page.path)
    console.log(await miniProgram.pageStack())
    // console.log(aa)
    // const element = await elements[0].$$('')
    // console.log(element)
    // await element.tap()
    // console.log(await miniProgram.currentPage())
  })


//   afterAll(async () => {
//     await miniProgram.close()
//   })
})