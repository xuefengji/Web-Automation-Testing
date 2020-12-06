/**
 * author: xuefengji
 * describe: 获取单次或长期商品
 */

async function getOneProduct(){
    const page = await miniProgram.currentPage();
    console.log(await page.path);
  //判断当前页面是否是首页
  if(await page.path === 'pages/index/index'){

  }
}

