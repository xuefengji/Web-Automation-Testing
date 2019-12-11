from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By

import time

driver = webdriver.Chrome()
driver.get('http://www.baidu.com')

#使用title_contains判断打开的页面
if EC.title_contains('百度一下'):
    print('打开页面成功')


locator = (By.CSS_SELECTOR,'input[name="wd"]')
# kw = driver.find_elements_by_css_selector('input[name="wd"]')
wait = WebDriverWait(driver,5).until(EC.visibility_of_element_located(locator),'元素找到')
print(wait)


