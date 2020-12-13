# Demo 项目

## 项目结构

demo
│  .gitignore
│  main.js
│  package-lock.json
│  package.json
│  README.md
├─api
│      address.js
│      getAddress.js
│      
├─configs
│      tool.json
│      user.json
│      
├─handel
│      getProduct.js
│      orderPay.js
│      singleBuy.js
│
├─testCases
│      index.js
│      
└─utils
        getRandomNum.js

main.js : 项目的主入口文件

testCases：测试用例文件夹

utils ：封装一些公共工具

api : 调用一些接口

handle : 逻辑处理

configs ： 配置文件



## 项目运行
+ 小程序自动化工具的安全端口需要打开，并且需要登录
+ 需要有 node 环境，如果没有安装 node，先安装
+ 下载项目后，需要使用 npm install 安装相关的依赖
+ 需要修改一些配置文件，user.json中修改 userid 和相关的token
+ main.js 是该项目的入口，执行 node main.js 即可

