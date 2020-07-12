const automator = require('miniprogram-automator')
// const goodsBuyTest = require('./testCase/goodBuy.test')
// const opreate = require('./utils/opreate.js')
// const {getElement} = opreate

describe('index', () => {
  let miniProgram
  let page

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

  test('购买商品', async () =>{
    //获取商品系列中的商品
    console.log(page)
    let goodItems = await page.$$('.goods-item');
    console.log(goodItems.length)
    let tapElements = await goodItems[0].$$('view')
    await tapElements[0].tap()
    // var id = elements[0].id
    // page = await miniProgram.navigateTo('/pages/goodsPage/goodsPresellDetail/index?id=' + id);
    page = await miniProgram.currentPage()
    console.log(page.path)
    console.log(await miniProgram.pageStack())
  })

  // afterAll(async () => {
  //   await miniProgram.close()
  // })
})