#### Jest

一、环境安装

1. 安装 node.js 

2. 软件编辑环境

   vscode 

3. 安装 Jest 

   npm init 

   npm install jest@24.8 -D

4. 配置 Jest 环境

   + package.json 中将 scripts 中的 test 的值改为 jest
   
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
   
   + jest 默认配置
   
     暴露配置文件：npx jest --init 会生成 jest.config.js 文件
   
   + Jest 使用的是 commonjs 语法，兼容 import 语法，需要配置babel，将 import 转换为 commonjs 语法
   
     安装：npm install @babel/core@7.4.5 @babel/preset-env@7.4.5 -D
   
     项目根目录下新建 .babelrc 文件，配置如下：
   
     ```
     {
     	"presets":[
     	["@babel/preset-env",{
     	"targets":{
     	"node":"current"
     	}
     	}]
     	]
     }
     ```



二、Jest 使用

+ 匹配器

  + toBe  可以匹配引用地址，类似于 object.js 、===
  + toEqual 只匹配内容
  + toBeNull 
  + toBeUndefined
  + toBeDefined
  + toBeTruthy
  + toBeFalsy
  + not: not.toBeFalsy

+ 数字相关匹配器

  + toBeLessThan : 小于

  + toBeGreaterThan : 大于

  + toBeGreaterThanOrEqual ：大于等于

  + toBeCloseTo : 接近于某一个数

    ```
    test('toBeCloseTo',()=>{
    const firstNumber = 0.1;
    const secondNumber = 0.2;
    expect(firstNumber + secondNumber).toCloseTo(0.3)
    })
    如果使用 toEqual 时会出错，由于 js 在计算浮点数时会出现很多小数，精度不准确，使用toCloseTo 可以得到接近的值
    ```

+ 字符串相关的匹配器

  + toMatch

+ 数组相关匹配器

  + toContain

+ 异常情况匹配器

  + toThrow：可填写抛出的内容、正则表达式

+ 监听 test.js 文件变化

  package.json 中 scripts 中 test 中改为“jest --watchAll” 会实时监控 test.js 文件变化
  
+ jest 模式




三、Jest 异步测试

+ 测试回调函数
  + test 测试方法中需要加传入 done 函数，然后在函数中需要执行 done 函数
+ 测试 promise 类型的，需要使用 than，然后使用 return 返回



四、Jest 中的钩子函数

+ beforeAll(()=>{})
+ afterAll(()=>{})
+ beforeEach(()=>{})
+ afterEach(()=>{})
+ describe 分组

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