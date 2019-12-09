from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
import time

driver = webdriver.Chrome()
driver.get('http://www.baidu.com')
time.sleep(5000)
if EC.title_contains('百度一下'):
    print('打开页面成功')
driver.close()
