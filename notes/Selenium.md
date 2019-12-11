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
  span:first-child  表示第一个后代元素
  span input:last-shild  表示
  
  
  ```

+ 

## 等待

webdriverwait

