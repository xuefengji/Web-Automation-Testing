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

