from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC

import time

driver = webdriver.Chrome()
driver.get('http://www.baidu.com')
time.sleep(5)
#使用title_contains判断打开的页面
if EC.title_contains('百度一下'):
    print('打开页面成功')
#根据id和class name进行定位
# keyword = driver.find_element_by_id('s_kw_wrap').find_elements_by_class_name('s_ipt')[0]
# keyword = driver.find_element_by_xpath('//*[@id="kw"]')    #根据xpath进行定位
keyword = driver.find_element_by_name('wd')   #使用name进行定位
print(EC.visibility_of_element_located(keyword))       #判断元素是否可见
keyword.send_keys('selenium')
button = driver.find_elements_by_css_selector('input[value="百度一下"]')   #根据css选择器进行定位
# driver.close()
