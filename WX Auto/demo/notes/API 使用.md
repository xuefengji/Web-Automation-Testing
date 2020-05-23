#### miniprogram-automator

##### Automator

+ 启动并连接开发者工具：automator.launch

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



##### miniProgram

+ 页面堆栈：miniProgram.pageStack

  ```
  automator.launch({
    cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
    projectPath: 'E:\\simlove-wechat-mini'
  }).then(async miniProgram=>{
    const pageStack = await miniProgram.pageStack();
    console.log(pageStack.length);// 当前页面栈数量 1
  })
  ```

  

+ 跳转 tabBar 页面：miniProgram.switchTab

  ```
  automator.launch({
    cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
    projectPath: 'E:\\simlove-wechat-mini'
  }).then(async miniProgram=>{
    const page = await miniProgram.switchTab("/pages/userCenter/index");
    //打开开发者工具后跳转个人中心页面
  })
  ```

+ 跳转非 tabBar 页面：miniProgram.navigateTo

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

+ 关闭当前页面跳转：miniProgram.redirectTo

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

+ 关闭当前页面，返回上一页面或多级页面：miniProgram.navigateBack()

  ```
  automator.launch({
    cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
    projectPath: 'E:\\simlove-wechat-mini'
  }).then(async miniProgram=>{
    const page = await miniProgram.navigateTo('/pages/goodsPage/goodsPresellDetail/index?id=3');
    console.log(page.path);
    //pages/goodsPage/goodsPresellDetail/index
  const pageBack = await miniProgram.navigateBack(); //返回上一页
    console.log(pageBack.path);
    //pages/index/index
    const pageStack = await miniProgram.pageStack();
    console.log(pageStack.length);// 当前页面栈数量 1
  })
  ```
  
+ 关闭所有连接，打开到应用的某个页面: automator.relaunch

  ```
  automator.launch({
    cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
    projectPath: 'E:\\simlove-wechat-mini'
  }).then(async miniProgram=>{
    const page = await miniProgram.reLaunch('/pages/goodsPage/goodsPresellDetail/index?id=3');
    console.log(page.path);
    //pages/goodsPage/goodsPresellDetail/index
  const pageStack = await miniProgram.pageStack();
    console.log(pageStack.length);// 当前页面栈数量  1
  })
  ```
  
+ 获取当前页面：miniProgram.currentPage()

  ```
  automator.launch({
    cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
    projectPath: 'E:\\simlove-wechat-mini'
  }).then(async miniProgram=>{
    const page = await miniProgram.currentPage();
    console.log(page.path);
    //pages/index/index
    const pageStack = await miniProgram.pageStack();
    console.log(pageStack.length);// 当前页面栈数量 1
  })
  
  ```

+ 获取系统信息：miniProgram.systemInfo()

  ```
  automator.launch({
    cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
    projectPath: 'E:\\simlove-wechat-mini'
  }).then(async miniProgram => {
    const systemInfo = await miniProgram.systemInfo();
    console.log(systemInfo);
    if (systemInfo.platform === 'devtools') {
      // Do something
    }
  })
  console结果：
  { model: 'iPhone 5',
    pixelRatio: 2,
    windowWidth: 320,
    windowHeight: 456,
    system: 'iOS 10.0.1',
    language: 'zh_CN',
    version: '7.0.4',
    screenWidth: 320,
    screenHeight: 568,
    SDKVersion: '2.10.4',
    brand: 'devtools',
    fontSizeSetting: 16,
    benchmarkLevel: 1,
    batteryLevel: 100,
    statusBarHeight: 20,
    safeArea:
     { right: 320,
       bottom: 568,
       left: 0,
       top: 20,
       width: 320,
       height: 548 },
    deviceOrientation: 'portrait',
    platform: 'devtools',
    devicePixelRatio: 2 }
  ```

+ 开启真机调试功能：miniProgram.remote()  默认为false，可以传入参数true

  ```
  automator.launch({
    cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
  projectPath: 'E:\\simlove-wechat-mini'
  }).then(async miniProgram => {
   await miniProgram.remote();
   
  })
  ```
  
  

##### Page

+ page.path：页面路径
+ page.query：页面参数
+ page.$：获取页面元素
+ page.$$：获取页面元素数组
+ page.waitFor：等待直到指定条件成立
+ page.data:  获取页面渲染数据 
+ page.callMethod：调用页面指定方法
+ page.setData：设置页面渲染数据
+ page.size：获取页面大小
<<<<<<< HEAD
+ page.scrollTop：获取页面滚动位置
=======
+ page.scrollTop：获取页面滚动位置
+ page.callMethod：调用页面指定方法

##### Element

+ element.$：在元素范围内获取元素
>>>>>>> 44180682b34797508c5cc7c4b1a6b3a327ac8d11
