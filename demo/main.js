/*
author: xuefengji
describe: 项目主入口
 */
const automator = require('miniprogram-automator')
const indexToOrder = require('./tests/index')
const tool = require('./configs/tool.json')

automator.launch({
    cliPath: tool['cliPath'], // 工具 cli 位置，如果你没有更改过默认安装位置，可以忽略此项
    projectPath: tool['projectPath'], // 项目文件地址
    timeout: tool['timeout'] //设置超时时间，默认为30000
}).then(async miniProgram => {
    indexToOrder(miniProgram)
  // await miniProgram.close()
})