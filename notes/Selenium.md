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

