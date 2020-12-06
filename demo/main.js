//
const automator = require('miniprogram-automator')
const indexToOrder = require('./tests/index')

automator.launch({
    cliPath: 'D:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat', // 工具 cli 位置，如果你没有更改过默认安装位置，可以忽略此项
    projectPath: 'E:\\work\\simlove-wechat-mini', // 项目文件地址
    timeout: 50000 //设置超时时间，默认为30000
}).then(async miniProgram => {
    indexToOrder(miniProgram)
  // await miniProgram.close()
})