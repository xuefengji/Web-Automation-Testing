const automator = require('miniprogram-automator')
// const opreate = require('./utils/opreate.js')
// const {getElement} = opreate

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
  }, 30000)

  test('购买商品', async () => {
    //  elements = await page.$$('.classify')
    elements = await page.$$('.goods-item')
    console.log(elements)
    // clickButton = await elements[0].$('van-stepper-54c9e8')
    //  console.log(elements[0].id)
    // expect(page.path).toMatch('pages/index/index');
    // var element = await elements[0].$('view')
    console.log(element.length)
    await element[0].tap()
  //  var id = elements[0].id
  //   page = await miniProgram.navigateTo('/pages/goodsPage/goodsPresellDetail/index?id=' + id);
    page = await miniProgram.currentPage()
    console.log(page.path)
    console.log(await miniProgram.pageStack())
    // console.log(aa)
    // const element = await elements[0].$$('')
    // console.log(element)
    // await element.tap()
    // console.log(await miniProgram.currentPage())
  })

  // afterAll(async () => {
  //   await miniProgram.close()
  // })
})