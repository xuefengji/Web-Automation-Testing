#### Jest

一、环境安装

1. 安装 node.js 

2. 软件编辑环境

   vscode 

3. 安装 Jest 

   npm init 

   npm install jset@24.8 -D

4. 配置 Jest 环境

   package.json 中将 scripts 中的 test 的值改为 jest
   
   ```
   {
    "name": "lession1",
    "version": "1.0.0",
    "description": "",
    "main": "math.test.js",
    "scripts": {
    "test": "jest"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
    "jest": "^24.8.0"
    }
}
   ```
   
   



二、Jest 优点

+ 速度快
+ API 简单
+ 易配置
+ 隔离性好
+ 监控模式
+ IDE 整合
+ Snapshot 
+ 多项目并行
+ 覆盖率
+ Mock 丰富