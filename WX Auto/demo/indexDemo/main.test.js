const automator = require('miniprogram-automator')
// const goodsBuyTest = require('./testCase/goodBuy.test')
// const opreate = require('./utils/opreate.js')
// const {getElement} = opreate

describe('index', () => {
  let miniProgram
  beforeAll(async () => {
    miniProgram = await automator.launch({
        cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
        // cliPath: 'E:\\微信web开发者工具\\cli.bat',
        projectPath: 'E:\\simlove-wechat-mini'
        // projectPath: 'F:\\simlove-wechat-mini'
    })
    // page = await miniProgram.reLaunch('/pages/index/index');
    // page = await miniProgram.currentPage();
    // await page.waitFor(500);
    // console.log(await page);
    // elements = await getElement(page,'goods-thumb',1)
    // console.log(element.length)
    // console.log(element[0])
    // console.log(page)
  }, 30000)

  test('从首页进入详情页购买购买商品', async () => {
    //获取商品系列中的商品
    // await page.waitFor(500);
    const page = await miniProgram.currentPage();
    const goodItems = await page.$$('.goods-item');
    // console.log(goodItems.length)
    var tapElements = await goodItems[0].$$('view');
    await tapElements[0].tap();
    await page.waitFor(500);
    // var id = elements[0].id
    // page = await miniProgram.navigateTo('/pages/goodsPage/goodsPresellDetail/index?id=' + id);
    page = await miniProgram.currentPage();
    if(page.path!='/pages/goodsPage/goodsPresellDetail/index'){
      const button = await page.$$('button')[0];
      await button.tap();
    }
    const buyButton = await page.$$(".add2cart")[0];
    await page.waitFor(500);
    await buyButton.tap();
    await page.waitFor(500);
    const cart = await page.$('pay-btn');
    await page.waitFor(500);
    await cart.tap()
    // console.log(page.path)
    // console.log(await miniProgram.pageStack())
  })

  // afterAll(async () => {
  //   await miniProgram.close()
  // })
})