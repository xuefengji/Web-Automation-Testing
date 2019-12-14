# Selenium

## 环境搭建

1、安装selenium

pip install selenium

2、下载浏览器driver

​    chrom：chromDriver

​    Firefox：FirefoxDriver

​    IE：IEDriver

3、将下载的driver放在python的安装目录

4、启动selenium

![start_driver](../images/start_driver.png)

此代码可以使用selenium启动chrom浏览器，打开百度页面

5、要启动不同的浏览器时，需要将不同浏览器的driver放到python安装目录下

6、使用title_contains函数判断页面是否正确打开

from selenium.webdriver.support import expected_conditions as EC

EC.title_contains('百度一下')      //返回值为True或False

![title_contains](../images/title_contains.png)



## 元素定位

1、根据id定位

```
keyword = driver.find_element_by_id('s_kw_wrap')
```

2、根据class_name：

findelement_by_class_name:获取一组元素，为web Element类型，默认会操作第一个元素

findelements_by_class_name：获取一组元素，为list类型，选择元素时可以操作list的方式获取

```
keyword = driver.find_element_by_id('s_kw_wrap').find_elements_by_class_name('s_ipt')[0]
```

3、根据xpath定位

```
keyword = driver.find_element_by_xpath('//*[@id="kw"]')   #使用xpath获取元素
```

4、根据属性name定位

```
keyword = driver.find_element_by_name('wd') 
```

5、根据css样式定位

```
button = driver.find_element_by_css_selector("input[value='百度一下']")
```

###### css定位方式

+ 根据标签名定位，

  ```
  kw = driver.find_elements_by_css_selector('input') 其中input为标签名
  ```

+ 根据id定位

  ```
  kw = driver.find_elements_by_css_selector('#kw')  kw为input这个标签的id属性
  
  kw = driver.find_elements_by_css_selector('input#kw') 表示id为kw的input
  ```

+ 根据class定位

  ```
  kw = driver.find_elements_by_css_selector('.s_ipt') s_ipt为class名
  kw = driver.find_elements_by_css_selector('input.s_ipt') 表示class为s_ipt的input
  ```

+ 根据属性值定位

  ```
  kw = driver.find_elements_by_css_selector('input[name="wd"]') 定位name属性为wd的input标签元素
  kw = driver.find_elements_by_css_selector('input[name="wd"][id='kw']') 定位name属性为wd,id为kw的input标签元素
  
  支持模糊匹配：
  + span[class ^=bg]    匹配所有span标签class属性值bg开头的元素
  
  + span[class $=rap]    匹配所有span标签class属性值rap结尾的元素
  
  + span[class *=quick]    匹配所有span标签class属性值中间有quick的元素
  
  ```

+ 层级元素定位

  ```
  1、子元素定位，必须是直接子元素，>表示直接子元素
  span>input   定位span元素下的input元素
  form>span>input  定位form下的input标签元素
  
  2、后代元素，是某一个元素的所有子元素，不止直接子元素，用空格表示后代元素
  span input   定位span元素下所有的input元素，所有层次的input
  css中表示后代元素的其他方式：
  span:first-child  表示定位span父元素的第一个元素
  span：first-of-child  表示定位span父元素的第一个span元素
  span input：first-child  表示定位span标签下，第一个元素
  span input:last-shild  表示span的最后一个元素
  span:nth-child(2)   表示span父元素的第2个元素
  
  ```

+ 兄弟元素定位

```
1、span + input    表示定位span元素后的第一个兄弟元素input元素
2、span ~ input  表示定位span元素后的所有兄弟元素input
```

附： https://www.jianshu.com/p/612dfaf39ce3 

## 等待

1、webdriverwait 显示等待

```
from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
driver = webdriver.Chrome()
driver.get('http://www.baidu.com')
locator = (By.CSS_SELECTOR,'input[name="wd"]')
wait=WebDriverWait(driver,5).until(EC.visibility_of_element_located(locator),'元素找到')

WebDriverWait(driver,timeout,poll_frequency=POLL_FREQUENCY,ignored_exceptions=None)
参数详解：
driver：当前浏览器驱动
timeout：设置超时时间，默认以秒为单位
poll_frequency:设置监测的时间间隔，默认为0.5秒
ignored_exceptions：超时后的异常信息，默认下抛NoSuchElementException异常
WebDriverWait一般有until和until_not方法配合使用
until(method,message)
until(method,message)


```

2、强制等待：time.sleep

```
driver = webdriver.Chrome()
driver.get('http://www.baidu.com')
time.sleep(5)     //强制设置等待5秒
element = driver.find_elements_by_css_selector('input[name=wd]')
```

3、隐式等待



## 获取元素属性值

```
element = driver.find_elements_by_css_selector('input[name=wd]')
element.__getattribute__('value')

__getattribute__：获取属性的值
```

## random

```
for i in range(5):    
	username = random.sample('1234sdfdg',5)    
	user = '.'.join(username)    
	print(user)             //dgdf4
```

## Pillow（操作图片）

1、安装：pip install pillow

2、简单用法

```
from PIL import Image
from selenium import webdriver
driver = webdriver.Chrome()
driver.get('http://www.baidu.com')
driver.save_screenshot('E:\\test1.png')    #截图保存
button = driver.find_element_by_id('su')
print(button.location)     #{'x': 728, 'y': 192}
left = button.location['x']
top = button.location['y']
right = button.size['width'] + left
bottom = button.size['height'] + top
im = Image.open('E:\\test1.png')   #打开截图
img = im.crop((left,top,right,bottom))   #按坐标进行裁剪img.save('E:\\test.png')
driver.close()
```

## pytesseract（识别图片中的字符）

```
image = Image.open('../images/test.png')
text = pytesseract.image_to_string(image)

注：有报错
解决方案：
1、先安装Tesseract-OCR
2、将Tesseract-OCR的路径添加至环境变量PATH中
3、在环境变量中新建一个变量名为TESSDATA_PREFIX，将Tesseract-OCR下的tessdata的路径设置为TESSDATA_PREFIX的值


Showapi验证图片：
1、打开showapi首页，下载sdk，拷贝ShowapiRequest.py文件到目录下，并引入
   from demos.ShowapiRequest import ShowapiRequest
2、查看官网api
r = ShowapiRequest("http://route.showapi.com/1274-2","my_appId","my_appSecret" )     //my_appId为appid号，my_appSecret为appSecret需要根据实际情况修改
r.addBodyPara("imgUrl", "http://pic.4j4j.cn/upload/pic/20130528/a9117a5351.jpg")
r.addBodyPara("base64", "")
r.addFilePara("imgFile", "替换为你的文件")
#以上三个参数可以三选一
res = r.post()
print(res.text) # 返回信息
```

