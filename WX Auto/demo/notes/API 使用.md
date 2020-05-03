#### miniprogram-automator

+ 启动并连接开发者工具

```
automator.launch({
    cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
    projectPath: 'E:\\simlove-wechat-mini'
  }).then(async miniProgram => {
    const page = await miniProgram.navigateTo('/page/index/index')
    await page.setData({})
  })
  
  cliPath: 为安装开发者工具时的目录
  projectPath: 为小程序工程项目目录
  
注意：使用前必须在开发者工具--设置--安全设置--开启服务端口
```

+ 跳转 tabBar 页面

  ```
  automator.launch({
    cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
    projectPath: 'E:\\simlove-wechat-mini'
  }).then(async miniProgram=>{
    const page = await miniProgram.switchTab("/pages/userCenter/index");
    //打开开发者工具后跳转个人中心页面
  })
  ```

+ 跳转非 tabBar 页面

  ```
  automator.launch({
    cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
    projectPath: 'E:\\simlove-wechat-mini'
  }).then(async miniProgram=>{
    const page = await miniProgram.navigateTo('/pages/goodsPage/goodsPresellDetail/index?id=3');
    console.log(page.path);  
    //pages/goodsPage/goodsPresellDetail/index
    const pageStack = await miniProgram.pageStack();
    console.log(pageStack.length);// 当前页面栈数量 2
  })
  
  注意：跳转页面后，首页不关闭，会在堆栈中
  ```

+ 关闭当前页面跳转

  ```
  automator.launch({
    cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
    projectPath: 'E:\\simlove-wechat-mini'
  }).then(async miniProgram=>{
    const page = await miniProgram.redirectTo('/pages/goodsPage/goodsPresellDetail/index?id=3');
    console.log(page.path);
    //pages/goodsPage/goodsPresellDetail/index
    const pageStack = await miniProgram.pageStack();
    console.log(pageStack.length);// 当前页面栈数量  1
  })
  
  此时，从首页跳转后，首页关闭，堆栈中只有跳转后的当前页，所以堆栈中只有 1 个页面
  ```

  